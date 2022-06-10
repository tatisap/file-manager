import { argv, stdin, stdout } from 'process';
import readline from 'readline';

const usernameArg = argv.find(arg => arg.startsWith('--username'));
const username = (usernameArg !== undefined) ? 
  usernameArg.slice(usernameArg.indexOf('=') + 1) : 
  'Unknown';

stdout.write(`Welcome to the File Manager, ${username}!\n`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

