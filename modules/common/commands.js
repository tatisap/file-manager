import { up } from '../nav/up.js';
import { cd } from '../nav/cd.js';
import { ls } from '../nav/ls.js';
import { read } from '../fs/read.js';
import { create } from '../fs/create.js';
import { rename } from '../fs/rename.js';
import { copy } from '../fs/copy.js';
import { move } from '../fs/move.js';
import { remove } from '../fs/remove.js';
import { getOsPropValue } from '../os/os.js';
import { calculateHash } from '../fs/hash.js';
import { compress } from '../fs/compress.js';
import { decompress } from '../fs/decompress.js';

export const commands = {
  up: up,
  cd: cd,
  ls: ls,
  cat: read,
  add: create,
  rn: rename,
  cp: copy,
  mv: move,
  rm: remove,
  os: getOsPropValue,
  hash: calculateHash,
  compress: compress,
  decompress: decompress,
};