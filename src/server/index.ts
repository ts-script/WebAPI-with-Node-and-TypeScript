import 'reflect-metadata';
import { Application} from 'express';
import { createExpressServer } from 'routing-controllers';

/* CONTROLLERS */
import { FoodController } from '../controllers/food.controller';

export class ApiServer {
    public app: Application;

    constructor() {
        this.app = createExpressServer({
            controllers: [
                FoodController
            ]
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}
