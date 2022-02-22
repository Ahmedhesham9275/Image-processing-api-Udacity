import sharp from 'sharp';
import path from 'path';

export default async function ReshapImage(
  imageName: string,
  H: number,
  W: number
): Promise<string> {
  let filePath: string = path.join('.', 'src', 'images', imageName);

  filePath = filePath + '.jpg';

  let outFile: string = path.join('.', 'src', 'images', 'Reshaped', imageName);

  outFile = outFile + W.toString() + 'x' + H.toString() + '.jpg';

  await sharp(filePath).resize(H, W).toFile(outFile);

  return outFile;
}
