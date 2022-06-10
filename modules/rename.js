import { rename as renameFile, access } from 'fs/promises';

async function isExist(filePath) {
  try {
    await access(filePath);
    return true;
  } 
  catch (err) {
    if (err.code === 'ENOENT') return false;
  }
}

export const rename = async (oldPath, newPath) => {
  if (await isExist(newPath)) throw new Error('FS operation failed');
  try {
    await renameFile(oldPath, newPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') throw new Error('FS operation failed');
  }
};