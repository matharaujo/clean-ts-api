import encrypt from '../helpers/encrypt';
import errorHandler from '../helpers/error-handler';

export default async (form, response) => {
    let { username, password } = form;
    if(!username) return errorHandler(response, 400, 'Username is null! Verify!');
    if(!password) return errorHandler(response, 400, 'Password is null! Verify!');

    password = await encrypt(password.toString());

    const user = {
        username,
        password,
    };

    return user;
};
