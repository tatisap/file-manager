import path, { isAbsolute } from 'path';
import { cwd } from 'process';

export const makeAbsolute = (pathway) => {
  const absPathway = (isAbsolute(pathway)) ? pathway : path.join(cwd(), pathway);
  return absPathway;
}