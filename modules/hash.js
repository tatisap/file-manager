import { readFile } from 'fs/promises';

export const calculateHash = async (path) => {
  const content = await readFile(path, { encoding: 'utf-8' });
  
  const { createHash } = await import('node:crypto');

  const hash = createHash('sha256');
  hash.update(content);
  console.log(hash.digest('hex'));
};