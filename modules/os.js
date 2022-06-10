import os from 'os';

const osParameters = {
  '--EOL': getEOL(),
  '--cpus': getCpusInfo(),
  '--homedir': getHomedir(),
  '--username': getUsername(),
  '--architecture': getArchInfo(),
}

export const getOsPropValue = (prop) => {
  return osParameters[prop];
}

function getEOL() {
  return os.EOL
}

function getCpusInfo() {
  return os.cpus().map(cpu => { 
    return {
      model: cpu.model,
      speed: Math.round(cpu.speed / 1000),
    }
  })
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