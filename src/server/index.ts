import 'reflect-metadata';
import { Application} from 'express';
import { createExpressServer } from 'routing-controllers';

/* CONTROLLERS */
import { CONTROLLERS } from '../controllers/index';

export class ApiServer {
    public app: Application;

    constructor() {
        this.app = createExpressServer({
            controllers: CONTROLLERS
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}
