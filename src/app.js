import 'dotenv/config';
import express from 'express';
import routes from './routes';
import logo from 'asciiart-logo';
import packageConfig from '../package.json';

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
  }

  banner() {
    const longText =
      'Nisi ut aliquip ex ea commodo consequat. Duis aute ' +
      'irure dolor in reprehenderit in voluptate velit esse ' +
      'Excepteur sint occaecat cupidatat non proident, ' +
      'sunt in culpa qui officia deserunt mollit anim ' +
      'id est laborum.';

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
