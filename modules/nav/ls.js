import { cwd } from 'process';
import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
    console.log(files.length);
    if (files.length === 0) {
      console.log('Directory is empty');
    } else {
      for await (const file of files) {
        console.log(file.name);
      }
    }
  }
  catch (err) {
    if (err.code === 'ENOENT' || err.code === 'EPERM') throw new Error('FS operation failed');
  } 
};