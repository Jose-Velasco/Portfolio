FROM node:12.11.1-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD npm start
