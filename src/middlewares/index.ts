import cors from 'cors';
import bodyParser from 'body-parser';

class Middlewares {
    public app: any;

    constructor(app) {
        this.app = app;

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());
    }

    static nonExistentRoute(app) {
        app.get('*', (req, res) => {
            res.status(404).json({
                error: 'Oops! An error has occurred!',
                message: `Apparently this route (${req.originalUrl}) is non-existent ;(`,
            });
        });
    }
}

export default Middlewares.nonExistentRoute;
