import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { createBrotliDecompress, createUnzip } from 'zlib';
import { makeAbsolute } from './absPath.js';
import { isExist } from './rename.js';

export const decompress = async (srcPath, destDirPath) => {
  const absSrcPath = makeAbsolute(srcPath);
  const absDestPath = path.join(makeAbsolute(destDirPath), 'archive');
  if (!await isExist(absSrcPath)) throw new Error('FS operation failed');

  const source = createReadStream(absSrcPath);
  const dest = createWriteStream(absDestPath);
  const brotli = createBrotliDecompress();

  pipeline(
    source,
    brotli,
    dest,
    (err) => {
      if (err) return console.error(err)
    }
  );
};