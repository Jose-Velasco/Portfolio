FROM node:12.11.1

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli@9.0.5 @angular-devkit/build-angular
RUN npm install

EXPOSE 4200

CMD npm start
