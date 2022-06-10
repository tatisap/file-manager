import { unlink } from 'fs/promises';

export const remove = async (path) => {
  try {
    await unlink(path);
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('FS operation failed');
  }
};