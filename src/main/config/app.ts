import setupMiddlewares from './middlewares';
import setupRoutes from './routes';
import nonExistentRouter from './non-existent-router';
import express from 'express';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
nonExistentRouter(app);

export default app;
