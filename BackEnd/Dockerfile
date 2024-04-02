FROM node:16-alpine

WORKDIR /Soroteca/BackEnd

COPY package*.json /Soroteca/BackEnd/

RUN npm install

COPY . /Soroteca/BackEnd/

EXPOSE 8888

CMD [ "npm","start" ]