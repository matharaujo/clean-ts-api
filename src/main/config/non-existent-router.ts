export default (app) => {
    app.use('*', (req, res) => {
        res.status(404).send({
            error: 'Oops! This route not-exists!',
            message: `Apparently this route ${req.originalUrl} not-exists!`,
        });
    });
};
