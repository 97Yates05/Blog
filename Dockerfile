FROM node:alpine

WORKDIR /home/node/app

ADD package.json /home/node/app/

RUN npm install

ADD . /home/node/app

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]