const connect = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function () {
    stdin.on('data', (data) => {
      if (data === '\u0003') {
        process.exit();
      }
    });
  }
  handleUserInput(stdin);
  return stdin;
}

setupInput();

