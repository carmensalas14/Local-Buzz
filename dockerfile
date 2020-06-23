FROM node:latest

# creating app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install

ADD Client /usr/src/app/Client
ADD Server /usr/src/app/Server

RUN npm build

CMD ["npm","start"]



