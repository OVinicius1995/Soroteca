FROM node:21-alpine

WORKDIR /soroteca/api

COPY package*.json /soroteca/api/

RUN npm install

COPY . /soroteca/api/

EXPOSE 8888

CMD [ "npm","start" ]