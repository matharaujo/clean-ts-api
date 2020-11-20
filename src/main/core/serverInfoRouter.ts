import PackageJson from '../../../package.json';

class ServerInfoRouter {
    static Route(app) {
        app.get('/', (req, res) => {
            res.status(200).json({
                nameApi: PackageJson.name,
                versionApi: PackageJson.version,
            });
        });
    }
}

export default ServerInfoRouter;
