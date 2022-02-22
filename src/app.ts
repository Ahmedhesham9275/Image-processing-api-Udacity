import express from 'express';
import path from 'path';
import routes from './routes/mainRoute';

const app = express();
const image = '/image' as string;

app.use(image, routes);

//middleware to serve static file => render the images folder
app.use(image, express.static(path.join(__dirname, 'images')));

export default app;
