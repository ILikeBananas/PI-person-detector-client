const io = require('socket.io-client')
const config = require('./config.json')
const socket = io.connect(config.server, {reconnect: true})

socket.on('connect', (socket) => {
  console.log('Client : Connected')
})
