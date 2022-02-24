import app from './app';
import express from 'express';

const port = process.env.port || 3000;

app.get('/', (req: express.Request, res: express.Response) : void => {
  res.send(
    'To view Images with full size try the following link "http://localhost:3000/image/{imagename}"   &&   To view Images after Reshaped size try the following link and change the query params "http://localhost:3000/image/Reshaped/icelandwaterfall100x300.jpg"    ||    To Reshaping images follow this link and modifiy params "http://localhost:3000/image/processing?imageName=&&W=&&H="'
  );
});

app.listen(port, () : void => {
  console.log(`server started at localhost:${port}`);
});
