FROM node:7.3.0

RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app/
RUN npm install 
COPY . hellow.js 
EXPOSE 3000
