import model from '../models/login-model';

export default async (request, response) => {
    let result = await model(request.body, response);

    response.status(200).send(result);
};
