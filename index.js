import { argv, stdin, stdout, cwd } from 'process';
import readline from 'readline';
import os from 'os';
import { validate } from './modules/input-validation.js';

process.chdir(os.homedir());

const usernameArg = argv.find(arg => arg.startsWith('--username'));
const username = (usernameArg !== undefined) ? 
  usernameArg.slice(usernameArg.indexOf('=') + 1) : 
  'Unknown';

stdout.write(`Welcome to the File Manager, ${username}!\n`);
stdout.write(`You are currently in ${cwd()}\n`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.on('line', (userInput) => {
  if (userInput.trim() === '.exit') rl.close();

  const inputValues = userInput.split(' ').filter(value => value !== '');
  const command = inputValues[0];
  const args = inputValues.slice(1);
  validate(command, args);
})

rl.on('close', () => stdout.write(`Thank you for using File Manager, ${username}!\n`));