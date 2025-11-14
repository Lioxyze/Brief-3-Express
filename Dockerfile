FROM node:22.14.0-alpine

RUN apk add --no-cache python3 make g++ sqlite-dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["node", "index.js"]
