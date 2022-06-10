import os from 'os';

const osParameters = {
  '--EOL': getEOL(),
  '--cpus': getCpusInfo(),
  '--homedir': getHomedir(),
  '--username': getUsername(),
  '--architecture': getArchInfo(),
}

export const getOsPropValue = (prop) => {
  console.log(osParameters[prop]);
}

function getEOL() {
  return JSON.stringify(os.EOL);
}

function getCpusInfo() {
  const amount = `Amount of CPUS: ${os.cpus().length}\n`;
  const info = os.cpus().reduce((acc, value, i) => {
    return acc + `${i + 1} model: ${value.model}, speed: ${Math.round(value.speed / 1000)} GHz;\n`;
  },'');
  return `${amount}${info}`;
}

function getHomedir() {
  return os.homedir();
}

function getUsername() {
  return os.userInfo().username;
}

function getArchInfo() {
  return os.arch();
}