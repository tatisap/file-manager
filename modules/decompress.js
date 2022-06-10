import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';

export const decompress = async (from, to) => {
  const source = createReadStream(from);
  const dest = createWriteStream(to);
  const unzip = createUnzip();

  pipeline(
    source,
    unzip,
    dest,
    (err) => {
      if (err) return console.error(err)
    }
  );
};