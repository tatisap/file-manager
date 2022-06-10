import path, { isAbsolute } from 'path';
import { cwd, stdout } from 'process';

export const cd = (dirPath) => {
  try {
    if (isAbsolute(dirPath)) {
      process.chdir(dirPath);
    } else {
      process.chdir(path.join(cwd(), dirPath));
    }
    stdout.write(`You are currently in ${cwd()}\n`);
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('Invalid input');
  }
}