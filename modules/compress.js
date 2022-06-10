import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

export const compress = async (from, to) => {
  const source = createReadStream(from);
  const dest = createWriteStream(to);
  const gzip = createGzip();

  pipeline(
    source,
    gzip,
    dest,
    (err) => {
      if (err) return console.error(err)
    }
  );
};