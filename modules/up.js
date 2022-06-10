import path from 'path';
import { cwd } from 'process';

export const up = () => {
  process.chdir(path.join(cwd(), '..'));
  console.log(`You are currently in ${cwd()}\n`);
}