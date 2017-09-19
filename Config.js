module.exports = class Config {
    constructor(config) {
        this.server = config.server
        this.name = config.name
        this.soundFilePath = config.soundFilePath
        this.volume = config.volume
    }

    setVolume(newVolume) {
        if(newVolume < 0 || newVolume > 10){
            console.log('error: incorrect volume parameter')
        } else {
            this.volume = newVolume
            console.log('volume set to : ' +  this.volume)
        }
    }
}
