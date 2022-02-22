import request from 'supertest';
import app from '../app';
import ReshapImage from '../ReshapImage';
import sharp from 'sharp';
import path from 'path';

// test end point to be ok
describe('Testing endpoint', () => {
  it('Result code should be 200 ', async () => {
    const result = await request(app).get('/image/processing');
    expect(result.status).toBe(200);
  });
});

// test the ReshapImage.ts
describe('Testing reshaping full size image', () => {
  // test the reshaping image func
  it('Result width and height should equal 350 ', async () => {
    const result = await ReshapImage('icelandwaterfall', 350, 350);
    const meta = await sharp(result).metadata();
    expect(meta.width && meta.height).toEqual(350);
  });

  // test the reshaping image outfile path
  it('Result path should be the same as the outfile dir ', async () => {
    const result = await ReshapImage('icelandwaterfall', 350, 350);
    let outFile: string = path.join(
      '.',
      'src',
      'images',
      'Reshaped',
      'icelandwaterfall'
    );
    outFile = outFile + '350' + 'x' + '350' + '.jpg';
    expect(result).toEqual(outFile);
  });
});
