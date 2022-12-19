import path from 'path';
import { writeFile } from 'fs/promises';
import { cwd } from 'process';

export const create = async (fileName) => {
  try {
    await writeFile(path.join(cwd(), fileName), '', {flag:'wx'});
  }
  catch (err) {
    if (err.code === 'EEXIST') throw new Error('Operation failed: this name is already in use');
    throw new Error('Operation failed');
  }
};