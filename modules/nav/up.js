import path from 'path';
import os from 'os';
import { cwd } from 'process';

export const up = () => {
  process.chdir(path.join(cwd(), '..'));
}