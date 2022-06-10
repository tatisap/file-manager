import { createReadStream } from 'fs';
import { stdout } from 'process';

export const read = async (path) => {
  const stream = createReadStream(path, 'utf-8');

  let content = '';
  stream.on('data', (chunk) => content += chunk);
  stream.on('end', () => stdout.write(`${content}\n`));
  stream.on('error', (err) => console.error(err.message));
};