import { createReadStream } from 'fs';
import { stdout } from 'process';
import os from 'os';
import { makeAbsolute } from '../common/make-path-absolute.js';

export const read = async (filePath) => {
  const stream = createReadStream(makeAbsolute(filePath), 'utf-8');
  
  return new Promise((resolve, reject) => {
    let content = '';
    stream.on('data', (chunk) => content += chunk);
    stream.on('end', () => resolve(content));
    stream.on('error', (err) => reject(err));
  })
    .then((content) => stdout.write(`${content}${os.EOL}`))
    .catch((err) => {
      if (err.code === 'EISDIR') console.error('Invalid input');
    });
};