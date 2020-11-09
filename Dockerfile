FROM node:latest

RUN mkdir -p /src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 5009

CMD ["npm","start"]
