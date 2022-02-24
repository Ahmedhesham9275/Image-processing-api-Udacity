import express from 'express';
import Pimage from './route/primaryImage';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) : void  =>  {
  res.send('pleas add the params {imageName&&W&&H}');
});

routes.use('/processing' as string, Pimage);

export default routes;
