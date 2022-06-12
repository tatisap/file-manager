import { cwd } from 'process';
import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
    for await (const file of files) {
      console.log(file.name);
    }
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('FS operation failed');
  } 
};