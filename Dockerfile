FROM node:latest

RUN mkdir /react-app

WORKDIR /react-app

COPY *.json ./

RUN npm i

COPY . .

RUN npm run build 

EXPOSE 3000

CMD npm start