import e from "express";
import helmet from "helmet";

export default function configurationMiddleware(app) {
  app.use(e.json());
  app.use(helmet());
}
