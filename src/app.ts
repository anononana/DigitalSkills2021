import config from './config/index';
const Koa = require("koa");
// import Session from "koa-session-ts";
const Router = require('koa-router');
import routes from './routes/index';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import "./db/sequelize";

    const app = new Koa();

    app.keys = ['newest secret key', 'older secret key'];

    // app.use(errorMiddleware);
    app.use(cors({ credentials: true }));
    app.use(bodyParser());
    // app.use(routes.routes()).use(routes.allowedMethods());
    // app.use(Session());

   

    app.use(routes.routes())
    app.listen(config.server.port, () => {
      console.log(`App listening at ${config.server.host}`)
    })