import { commands } from "./commands.js";
import { access } from 'fs/promises';

export const validateInput = (command, args) => {
  if (commands[command] === undefined) throw new Error('Invalid input');
  if (commands[command].length !== args.length) throw new Error('Invalid input');
}

export const isExist = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } 
  catch (err) {
    if (err.code === 'ENOENT') return false;
  }
}