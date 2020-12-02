const net = require('net');

const connect = function() {
  // establish connection
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    conn.write('Name: CME');
    console.log('Connected to game server successfully');
    let index = 0;
    let max = 35;
    function recursion(index) {
      if (index >= max) {
        return conn;
      }
      setTimeout(() => {
        // conn.write('Move: up');
        recursion(index = index + 1);
      }, 50);
    } 
    recursion(index);
  });
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // })
  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log('Message from server:', data)
  });
  return conn;
};

module.exports = connect;