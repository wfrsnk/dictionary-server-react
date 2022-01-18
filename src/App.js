
import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Modal from './components/Modal';
import Term from './components/Term';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      terms: [],
      active: false,
    }
  }

  componentDidMount() {
    fetch('/api/terms').then(res => res.json()).then(data => {
      this.setState({terms: this.state.terms.concat(data) });
    })
  }

  addTerm = (ID,termTitle, descriptionText) => {
    const newTerm = {
        id: ID,
        term: termTitle,
        description: descriptionText,
      };  
    this.setState({terms: this.state.terms.concat(newTerm) });
     
  }

  setModalActive = (value) =>{
    this.setState({active: value})
  }
 
  render(){
    const terms = this.state.terms;

    return(  <div>
      <Header />
      <Button dopClass = '' value = {true} setActive = {this.setModalActive}>
        Добавить
      </Button>
      <Modal active = {this.state.active} setActive = {this.setModalActive} newTerm = {this.addTerm}> 
      </Modal>
      { terms.map(element => (<Term key = {element.id} term = {element.term} description = {element.description} ></Term>))}
      

    </div>);
  }
 
}

export default App;
