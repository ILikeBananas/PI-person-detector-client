const io = require('socket.io-client')
const config = require('./config.json')
const socket = io.connect(config.server, {reconnect: true})

socket.on('connect', () => {
  console.log('Client : Connected')
  test()
})
function test() {
  console.log('enter test function')
  socket.emit('raspberryPI', {name : config.name})
  console.log('test function ended')
}
