import { Router } from "express";
import EntityController from "./app/controllers/EntityController";
import packageConfig from '../package.json';
import containerInspect from '../container.json';

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({
    name: packageConfig.name,
    author: packageConfig.author,
    description: packageConfig.description,
    mode: process.env.APP_RUNNING_MODE,
    version: packageConfig.version,
    license: packageConfig.license
  }, containerInspect);
});

routes.get('/entity', EntityController.get);
routes.post("/entity", EntityController.post);
routes.put('/entity/:id', EntityController.put);
routes.delete('/entity/:id', EntityController.delete);

export default routes;
