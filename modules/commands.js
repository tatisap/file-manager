import { create } from './create.js';
import { remove } from './delete.js';
import { copy } from './copy.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';
import { calculateHash } from './hash.js';
import { getOsPropValue } from './os.js';
import { read } from './read.js';
import { rename } from './rename.js';
import { up } from './up.js';
import { cd } from './cd.js';
import { ls } from './ls.js';

export const commands = {
  up: up,
  cd: cd,
  ls: ls,
  cat: read,
  add: create,
  rn: rename,
  cp: copy,
  rm: remove,
  os: getOsPropValue,
  hash: calculateHash,
  compress: compress,
  decompress: decompress,
};