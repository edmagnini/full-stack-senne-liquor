FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install -g knex

COPY . .

COPY entrypoint.sh /usr/app/entrypoint.sh

RUN chmod +x /usr/app/entrypoint.sh

EXPOSE 3003

ENTRYPOINT ["/usr/app/entrypoint.sh"]
