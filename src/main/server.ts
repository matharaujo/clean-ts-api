import app from './config/app';

try {
    app.listen(3000, () => console.log(`Server running at http://localhost:3000`))
} catch (error) {
    console.log(error);
};
