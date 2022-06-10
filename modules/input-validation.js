import { commands } from "./commands.js";

export const validate = (command, args) => {
  if (commands[command] === undefined) throw new Error('Invalid input');
  if (commands[command].length !== args.length) throw new Error('Invalid input');
}