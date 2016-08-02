// this server is only currently used to check/debug the webpack.config file
const server = require('express')();
const config = require('../webpack.config');

eval(require('locus'));

server.listen(3030, ()=>{
  console.log('Listening to port 3030');
});