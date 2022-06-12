export const format = (args) => {
  const formattedArgs = [];
  let isClosed = true;

  args.forEach((arg) => {
    if (isClosed) formattedArgs.push(arg);
    if (!isClosed) formattedArgs[formattedArgs.length - 1] += ` ${arg}`;
    if (arg.startsWith('"')) isClosed = false;
    if (arg.endsWith('"')) isClosed = true;
  });
  return formattedArgs.map(arg => {
    return (arg[0] === '"' && arg[arg.length - 1] === '"') ?
    arg.slice(1, arg.length - 1) : 
    arg;
  });
}