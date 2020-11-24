import controller from '../controllers/login-controller';
import { Express } from 'express';

export default async (app: Express) => {
    app.post('/login', (request, response) => controller(request, response));
};
