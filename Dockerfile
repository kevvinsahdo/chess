FROM node:8.16

WORKDIR /app

COPY package*.json ./

RUN npm install --no-audit --no-optional && \
    mv package-lock.json /tmp/package-lock.json

COPY . ./app
