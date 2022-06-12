import { createReadStream } from 'fs';
import { makeAbsolute } from '../common/make-path-absolute.js';
import { isExist } from '../common/validation.js';

export const calculateHash = async (filePath) => {
  const absFilePath = makeAbsolute(filePath);
  if (!await isExist(absFilePath)) throw new Error('FS operation failed');

  const stream = createReadStream(absFilePath, 'utf-8');

  return new Promise((resolve, reject) => {
    let content = '';
    stream.on('data', (chunk) => content += chunk);
    stream.on('end', () => resolve(content));
    stream.on('error', (err) => reject(err));
  })
    .then(async (content) => {
      const { createHash } = await import('node:crypto');
      const hash = createHash('sha256');
      hash.update(content);
      console.log(hash.digest('hex'));
    })
    .catch((err) => {
      if (err.code === 'EISDIR') console.error('Invalid input');
    });
};