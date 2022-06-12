import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { makeAbsolute } from '../common/make-path-absolute.js';
import { isExist } from '../common/validation.js';

export const compress = async (srcPath, destDirPath) => {
  const absSrcPath = makeAbsolute(srcPath);
  if (!await isExist(absSrcPath)) throw new Error('FS operation failed');

  const source = createReadStream(absSrcPath);
  const dest = createWriteStream(path.join(makeAbsolute(destDirPath), `${path.basename(absSrcPath)}.br`));
  const brotli = createBrotliCompress();

  try {
    await pipeline(
      source,
      brotli,
      dest
    );
  }
  catch (err) {
    throw new Error('Operation failed');
  }
};