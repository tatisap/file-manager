import os from 'os';
import readline from 'readline';
import { argv, stdin, stdout, cwd } from 'process';
import { validateInput } from './modules/common/validation.js';
import { commands } from './modules/common/commands.js';

process.chdir(os.homedir());

const usernameArg = argv.find(arg => arg.startsWith('--username='));
const username = (usernameArg !== undefined) ? 
  usernameArg.slice(usernameArg.indexOf('=') + 1) : 
  'Unknown';

stdout.write(`Welcome to the File Manager, ${username}!${os.EOL}`);
stdout.write(`You are currently in ${cwd()}${os.EOL}`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.on('line', async (userInput) => {
  if (userInput.trim() === '.exit') {
    rl.close(); 
    return;
  }
  try {
    const inputValues = userInput.split(' ').filter(value => value !== '');
    const [command, ...args] = inputValues;
    validateInput(command, args);
    await commands[command](...args);
    stdout.write(`${os.EOL}You are currently in ${cwd()}${os.EOL}`);
  }
  catch (err) {
    console.log(err.message);
  }
});

rl.on('close', () => stdout.write(`Thank you for using File Manager, ${username}!${os.EOL}`));