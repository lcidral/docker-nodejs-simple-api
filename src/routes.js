import { Router } from "express";
import EntityController from "./app/controllers/EntityController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({
    status: "Microservice is Ready!",
    mode: process.env.APP_RUNNING_MODE,
    version: process.env.APP_VERSION
  });
});

routes.get('/entity', EntityController.get);
routes.post("/entity", EntityController.post);
routes.put('/entity/:id', EntityController.put);
routes.delete('/entity/:id', EntityController.delete);

export default routes;
