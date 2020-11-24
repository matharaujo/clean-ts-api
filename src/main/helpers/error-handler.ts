export default (response, status, message) => {
    response.status(status).send({
        error: 'Oops! An error has occurred!',
        message,
    });
};
