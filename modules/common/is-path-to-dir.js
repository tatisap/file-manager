import { stat } from 'fs/promises';

export const isPathToDir = async (pathway) => {
  const file = await stat(pathway);
  return file.isDirectory();
}