# kasaz-coding-challenge

A simple kasaz-like webpage, built with MEVN stack.

## Getting started

To start this application, you only need **docker** and **docker-compose**.
The `docker-compose` file located at the root of the project allows you to build and run all of the services in docker containers.

Go to the root directory and run this command:

```bash
docker-compose up --build
```

Then, visit the following url with your web browser: <http://localhost:8080/>

## Services

+ [kasaz-coding-challenge-client](./client/README.md) - Vue.js SPA

+ [kasaz-coding-challenge-server](./server/README.md) - Express.js REST API

+ [kasaz-coding-challenge-database](./database/) - MongoDB database

## Preview

![Main preview](https://user-images.githubusercontent.com/29121316/71782058-f436e800-2fd5-11ea-88f6-f5503a83d6eb.png)
![Filters preview](https://user-images.githubusercontent.com/29121316/71782059-f436e800-2fd5-11ea-8b6c-9efa8ddf9d8a.png)
