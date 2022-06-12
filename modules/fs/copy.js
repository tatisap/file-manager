import path from 'path';
import { isExist } from '../common/validation.js';
import { makeAbsolute } from '../common/make-path-absolute.js';
import { createReadStream, createWriteStream } from 'fs';
import { stat } from 'fs/promises';
import { pipeline } from 'stream/promises';

export const copy = async (srcPath, destDirPath) => {
  const absSrcPath = makeAbsolute(srcPath);
  const srcFile = await stat(absSrcPath);
  if (srcFile.isDirectory()) throw new Error('Operation failed: no such file exists');
  if (!await isExist(absSrcPath)) throw new Error('Operation failed: no such file exists');
  const absDestPath = path.join(makeAbsolute(destDirPath), path.basename(absSrcPath));
  await copyFile(absSrcPath, absDestPath);
};

const copyFile = async (src, dest) => {
  if (await isExist(dest)) {
    const newDest = path.join(
      path.dirname(dest),
      `${path.parse(dest).name}-copy${path.parse(dest).ext}`);
    console.log(newDest); 
    console.log(dest); 
    await copyFile(dest, newDest);
  } else {
    try {
      await pipeline(
        createReadStream(src),
        createWriteStream(dest),
      );
    }
    catch (err) {
      throw new Error('Operation failed');
    }
  }
}