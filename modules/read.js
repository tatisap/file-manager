import { createReadStream } from 'fs';
import path, { isAbsolute } from 'path';
import { cwd, stdout } from 'process';

export const read = async (filePath) => {
  const stream = createReadStream((
    isAbsolute(filePath)) ? filePath : path.join(cwd(), filePath),
    'utf-8'
  );
  
  let content = '';
  stream.on('data', (chunk) => content += chunk);
  stream.on('end', () => stdout.write(`${content}\n`));
  stream.on('error', (err) => {
    if (err.code === 'EISDIR') console.error('Invalid input');
  });
};