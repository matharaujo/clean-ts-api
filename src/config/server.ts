import ServerInfoRouter from '../main/core/serverInfoRouter';
import Middlewares from '../middlewares/index';

class Server {
    public app: any;

    private readonly port: number;

    constructor(app, port) {
        this.app = app;
        this.port = port;

        this.createServer(port);
        new ServerInfoRouter.Route(app);
        new Middlewares(app);
    }

    public createServer(port) {
        this.app.listen(port, () => {
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }
}

export default Server;
