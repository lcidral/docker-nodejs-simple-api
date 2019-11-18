import 'dotenv/config';
import express from 'express';
import routes from './routes';
import logo from 'asciiart-logo';
import packageConfig from '../package.json';
import logo from 'asciiart-logo';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.banner();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes)
    this.server.use((request, response, next) => {
      console.time("Request");
      console.log(
        `${request.method}; URL: ${request.url}`
      );
      next();
      console.timeEnd("Request");
    });
  }

  banner() {
    const longText =
      'This repository is the result of my studies using of Docker, ' +
      'NodeJS, GraphQL, Performance and Stress Tests, Kubernetes, ' +
      'React, React Native and Security issues.';
    console.log(
      logo(packageConfig)
        .emptyLine()
        .left(longText)
        .emptyLine()
        .left(packageConfig.author)
        .render()
    );
  }
}

export default new App().server;
