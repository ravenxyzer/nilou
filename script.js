const { spawn } = require('child_process');

const jarPath = './bot.jar';

const javaProcess = spawn('java', ['-jar', jarPath], {
  detached: true,
  stdio: 'ignore',
});

javaProcess.unref();