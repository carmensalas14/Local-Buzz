FROM node:latest
EXPOSE 8080

RUN mkdir -p /home/LocalBuzz
WORKDIR /home/LocalBuzz

COPY ./Client /home/LocalBuzz

RUN npm run build

RUN npm install

CMD npm start


