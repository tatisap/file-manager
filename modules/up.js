import path from 'path';
import os from 'os';
import { cwd } from 'process';

export const up = () => {
  process.chdir(path.join(cwd(), '..'));
  console.log(`You are currently in ${cwd()}${os.EOL}`);
}