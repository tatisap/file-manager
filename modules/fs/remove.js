import { unlink } from 'fs/promises';
import { makeAbsolute } from '../common/make-path-absolute.js';

export const remove = async (filePath) => {
  try {
    const absFilePath = makeAbsolute(filePath);
    await unlink(absFilePath);
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('FS operation failed');
  }
};