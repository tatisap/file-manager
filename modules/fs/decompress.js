import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { isPathToDir } from '../common/is-path-to-dir.js';
import { makeAbsolute } from '../common/make-path-absolute.js';
import { isExist } from '../common/validation.js';

export const decompress = async (srcPath, destDirPath) => {
  const absSrcPath = makeAbsolute(srcPath);
  const absDestPath = path.join(makeAbsolute(destDirPath), path.basename(absSrcPath, '.br'));
  if (!await isExist(absSrcPath) || await isPathToDir(absDestPath)) throw new Error('Operation failed: no such file exists');
  if (await isExist(absDestPath)) throw new Error(`Operation failed: File ${path.basename(absDestPath)} exists`);

  const source = createReadStream(absSrcPath);
  const dest = createWriteStream(absDestPath);
  const brotli = createBrotliDecompress();

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