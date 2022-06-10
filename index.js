import { argv, stdin, stdout } from 'process';
import readline from 'readline';
import os from 'os';

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