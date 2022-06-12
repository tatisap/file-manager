import path, { isAbsolute } from 'path';
import { cwd } from 'process';

export const cd = (dirPath) => {
  try {
    if (isAbsolute(dirPath)) {
      process.chdir(dirPath);
    } else {
      process.chdir(path.join(cwd(), dirPath));
    }
  }
  catch (err) {
    if (err.code === 'ENOENT' || err.code === 'ENOTDIR') throw new Error('Invalid input');
  }
}