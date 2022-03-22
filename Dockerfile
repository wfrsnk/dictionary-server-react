FROM node:14-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN ["npm", "run", "build"]
EXPOSE 80
CMD ["npm", "start"]


# FROM node:latest

# RUN mkdir /react-app

# WORKDIR /react-todo

# COPY *.json ./

# RUN npm i

# COPY . .

# RUN npm run build --only=prod

# EXPOSE 3000

# CMD npm start