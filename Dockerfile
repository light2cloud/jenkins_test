FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR  /usr/src/app/
COPY . hellow.js /usr/src/app/ 
EXPOSE 3000
CMD node hellow.js
