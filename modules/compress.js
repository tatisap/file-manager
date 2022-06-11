import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';
import { makeAbsolute } from './absPath.js';
import { isExist } from './rename.js';

export const compress = async (srcPath, destDirPath) => {
  if (!await isExist(makeAbsolute(srcPath))) throw new Error('FS operation failed');

  const source = createReadStream(makeAbsolute(srcPath));
  const dest = createWriteStream(path.join(makeAbsolute(destDirPath), 'archive'));
  const brotli = createBrotliCompress();

  pipeline(
    source,
    brotli,
    dest,
    (err) => {
      if (err) return console.error(err)
    }
  );
};