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
  });
  // interpret incoming data as text
  conn.on('data', (data) => {
  console.log('Message from server:', data)
  });
  return conn;
};

module.exports = connect;