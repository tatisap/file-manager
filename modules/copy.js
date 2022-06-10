import path from 'path';
import { opendir, mkdir, copyFile } from 'fs/promises';

export const copy = async (from, to ) => {
  try {
    const dir = await opendir(from);
    await mkdir(to);

    for await (const dirent of dir) {
      const filePath = path.join(from, dirent.name);
      const copyFilePath = path.join(to, dirent.name);
      if (dirent.isFile()) {
        await copyFile(filePath, copyFilePath);
      } else {
        copy(filePath, copyFilePath);
      }
    }
  }
  catch (err) {
    if (err.code === 'EEXIST' || err.code === 'ENOENT') throw new Error('FS operation failed');
  }
};