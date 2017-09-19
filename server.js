const io = require('socket.io-client')
const config = require('./config.json')
const socket = io.connect(config.server, {reconnect: true})
const Config = require('./Config')
let rpi = new Config(config)

socket.on('connect', () => {
    console.log('Client : Connected')
    socket.emit('raspberryPI', {name : rpi.name})
})

socket.on('new config', (config) => {
    console.log('new config')
})

socket.on('new volume', (info) => {
    rpi.setVolume(info.volume)
})
