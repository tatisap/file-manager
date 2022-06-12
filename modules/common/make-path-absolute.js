import path, { isAbsolute } from 'path';
import { cwd } from 'process';

export const makeAbsolute = (pathway) => {
  return (isAbsolute(pathway)) ? pathway : path.join(cwd(), pathway);
}