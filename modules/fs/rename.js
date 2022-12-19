import { rename as renameFile } from 'fs/promises';
import path from 'path';
import { makeAbsolute } from '../common/make-path-absolute.js';
import { isExist } from '../common/validation.js';

export const rename = async (filePath, newName) => {
  const absFilePath = makeAbsolute(filePath);
  const newFilePath = path.join(path.dirname(absFilePath), newName);
  if (await isExist(newFilePath)) throw new Error('Operation failed: this name is already in use');
  try {
    await renameFile(absFilePath, newFilePath);
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('Operation failed: no such file exists');
    throw new Error('Operation failed');
  }
};