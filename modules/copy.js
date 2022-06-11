import path from 'path';
import { isExist } from './rename.js';
import { makeAbsolute } from './absPath.js';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export const copy = async (srcPath, destDirPath) => {
  const absSrcPath = makeAbsolute(srcPath);
  const absDestPath = path.join(makeAbsolute(destDirPath), path.parse(absSrcPath).base);
  if (await isExist(absDestPath) || !await isExist(absSrcPath)) throw new Error('FS operation failed');

  const source = createReadStream(absSrcPath);
  const dest = createWriteStream(absDestPath);

  pipeline(
    source,
    dest,
    (err) => {
      if (err) return console.error(err);
    }
  );
};