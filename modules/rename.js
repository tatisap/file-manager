import { rename as renameFile, access } from 'fs/promises';
import path from 'path';
import { makeAbsolute } from './absPath.js';

async function isExist(filePath) {
  try {
    await access(filePath);
    return true;
  } 
  catch (err) {
    if (err.code === 'ENOENT') return false;
  }
}

export const rename = async (filePath, newName) => {
  const absFilePath = makeAbsolute(filePath);
  const newFilePath = path.join(path.dirname(absFilePath), newName);
  if (await isExist(newFilePath)) throw new Error('FS operation failed');
  try {
    await renameFile(absFilePath, newFilePath);
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('FS operation failed');
  }
};