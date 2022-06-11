import path from 'path';
import { isExist } from './rename.js';
import { makeAbsolute } from './absPath.js';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const copy = async (srcPath, destDirPath) => {
  const absSrcPath = makeAbsolute(srcPath);
  const absDestPath = path.join(makeAbsolute(destDirPath), path.parse(absSrcPath).base);
  if (await isExist(absDestPath) || !await isExist(absSrcPath)) throw new Error('FS operation failed');
  
  try {
    await pipeline(
      createReadStream(absSrcPath),
      createWriteStream(absDestPath),
    );
  }
  catch (err) {
    throw new Error('FS operation failed');
  }
};