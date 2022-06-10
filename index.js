import { argv, stdin, stdout } from 'process';
import readline from 'readline';
import os from 'os';

import { create } from './modules/create.js';
import { remove } from './modules/delete.js';
import { copy } from './modules/copy.js';
import { compress } from './modules/compress.js';
import { decompress } from './modules/decompress.js';
import { calculateHash } from './modules/hash.js';
import { getOsPropValue } from './modules/os.js';
import { read } from './modules/read.js';
import { rename } from './modules/rename.js';

const commands = {
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

let currentdir = os.homedir();

const usernameArg = argv.find(arg => arg.startsWith('--username'));
const username = (usernameArg !== undefined) ? 
  usernameArg.slice(usernameArg.indexOf('=') + 1) : 
  'Unknown';

stdout.write(`Welcome to the File Manager, ${username}!\n`);
stdout.write(`You are currently in ${currentdir}\n`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.on('line', (text) => {
  if (text.trim() === '.exit') rl.close();
})

rl.on('close', () => stdout.write(`Thank you for using File Manager, ${username}!\n`));