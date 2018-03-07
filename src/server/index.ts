import { Application} from 'express';
import 'reflect-metadata';
import { Container } from "typedi";
import { createExpressServer, useContainer } from 'routing-controllers';

/* CONTROLLERS */
import { CONTROLLERS } from '../controllers/index';

export class ApiServer {
    public app: Application;

    constructor() {
        useContainer(Container);
        this.app = createExpressServer({
            controllers: CONTROLLERS
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}
