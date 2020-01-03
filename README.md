# kasaz-coding-challenge

A simple kasaz-like webpage, built with MEVN stack.

## Getting started

To start this application, you only need **docker** and **docker-compose**.
The `docker-compose` file located at the root of the project allows you to build and run all of the services in docker containers.

Go to the root directory and run this command:

```bash
docker-compose up
```

Then, visit the following url with your web browser: http://localhost:8080/

## Services

+ [kasaz-coding-challenge-client](./client/README.md) - Vue.js SPA

+ [kasaz-coding-challenge-server](./server/README.md) - Express.js REST API

+ [kasaz-coding-challenge-database](./database/) - MongoDB database
