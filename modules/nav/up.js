import path from 'path';
import { cwd } from 'process';

export const up = () => {
  process.chdir(path.join(cwd(), '..'));
}