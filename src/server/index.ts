import 'reflect-metadata';
import { Application} from 'express';
import express from 'express';

import { SecurityTokenController } from '../securityTokenService/controllers/securityToken.controller';

export class ApiServer {

    public app: Application;

    constructor() {
        this.app = express();
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}