import { createReadStream } from 'fs';
import { makeAbsolute } from './absPath.js';
import { isExist } from './rename.js';

export const calculateHash = async (filePath) => {
  const absFilePath = makeAbsolute(filePath);
  if (!await isExist(absFilePath)) throw new Error('FS operation failed');

  const stream = createReadStream(absFilePath, 'utf-8');

  let content = '';
  stream.on('data', (chunk) => content += chunk);
  stream.on('end', async () => {
    const { createHash } = await import('node:crypto');

    const hash = createHash('sha256');
    hash.update(content);
    console.log(hash.digest('hex'));
  });
  stream.on('error', (err) => {
    if (err.code === 'EISDIR') console.error('Invalid input');
  });
};