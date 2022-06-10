import { writeFile } from 'fs/promises';

export const create = async (path) => {
  try {
    await writeFile(path, '', {flag:'wx'});
  }
  catch (err) {
    if (err.code === 'EEXIST') throw new Error('FS operation failed');
  }
};