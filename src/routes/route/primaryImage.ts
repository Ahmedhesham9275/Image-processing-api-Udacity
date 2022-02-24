import express from 'express';
import { existsSync } from 'fs';
import path from 'path';
import ReshapImage from '../../ReshapImage';

const Pimage = express.Router();

Pimage.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const imageName: string = req.query.imageName as string;
    const W: number = parseInt(req.query.W as string);
    const H: number = parseInt(req.query.H as string);
    const Check = [];
    // input query validation
    if (imageName === undefined) {
      Check.push('pleas add correct image name ');
    } else if (W <= 0 || W == null) {
      Check.push('please add valid width');
    } else if (H <= 0 || H == null) {
      Check.push('please add valid height');
    }

    if (Check.length !== 0) {
      //printing validation errors
      res.status(200).send(Check);
    } else {
      // process to reshaping

      let beforePath: string = path.join('.', 'src', 'images', imageName);
      beforePath = beforePath + '.jpg';

      let afterPath: string = path.join(
        '.',
        'src',
        'images',
        'Reshaped',
        imageName
      );
      afterPath = afterPath + W.toString() + 'x' + H.toString() + '.jpg';

      // image processing
      try {
        //if the full size image found
        if (existsSync(beforePath)) {
          console.log('found');
          const file : string = path.resolve(beforePath);
          console.log(file);
          // if the reshaped image allready processed

          if (existsSync(afterPath)) {
            const file : string = path.resolve(afterPath);
            res.sendFile(file);
          } else {
            // reshaping the image for first time
            const reshape : string = await ReshapImage(imageName, H, W);
            console.log(reshape);
            const file : string = path.resolve(afterPath);
            res.sendFile(file);
          }
        } else {
          res
            .status(200)
            .send('incorrecy file path, please retype correct one');
        }
      } catch (error) {
        res.send('there is a problem ');
        console.log('Catch error', error);
      }
    }
  }
);

export default Pimage;
