FROM node:10.11

WORKDIR /src/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY . .

ENV PORT=3000
EXPOSE $PORT

CMD ["yarn", "run", "dev"]

