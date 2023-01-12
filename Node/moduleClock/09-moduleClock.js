'use strict'
// Creamos un modulo o libreria
let Clock = (function(){
    let EventEmitter = require('events').EventEmitter;

    class Clock extends EventEmitter{
        constructor(){
            super();
            let self = this;

            setInterval(function(){
                self.emit('tictac');
            },1000);

            self.on('tictac', function (){
                self.theTime();
            })
        }

        theTime(){
            let date = new Date(), hrs = date.getHours(), min = date.getMinutes(), sec = date.getSeconds(), msg = hrs + ':' + min + ':' + sec;
            console.log(msg);
        }
    }

    return Clock;
})()
    
module.exports = Clock;
