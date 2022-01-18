const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const bp = require('body-parser');

const PORT = process.env.PORT || 80;

const url = 'mongodb+srv://admin:admin1234@cluster0.l8ht6.mongodb.net/dictionaryTerms';

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

// async function start() {
//     try{
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useFindAndModify: false
//         })
        
//     }
//     catch (e) {
//         console.log(e);
//     }
// }



//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//простой тест сервера

app.use(bp.urlencoded({extended:true}))

app.all('/api/terms',  (req, res) => {

    let jsonData = require('./terms.json')
    res.send(jsonData)
    // const {id, title, description} = req.body;

    // fs.writeFileSync('terms.json', JSON.stringify({id:id,title:title,description:description}));
    // res.send('completed');
});

//обслуживание html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`);
});
