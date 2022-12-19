import { cwd } from 'process';
import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
  
    if (files.length === 0) {
      console.log('Directory is empty');
    } else {
      console.table(files.map((file) => {
        return {
          Name: file.name,
          Type: file.isDirectory() ? 'directory' : 'file'}
      }));
    }
  }
  catch (err) {
    if (err.code === 'EPERM') throw new Error('Operation failed: operation is not permitted');
    throw new Error('Operation failed');
  } 
};