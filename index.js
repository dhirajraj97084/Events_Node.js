const EventEmitter=require('events');
const event=new EventEmitter();

event.on('saymyname',()=>{
    console.log('my name is dhiraj')
})

event.on('saymyname',()=>{
    console.log('my name is suraj')
})

event.on('saymyname',()=>{
    console.log('my name is DEVraj')
})

event.emit('saymyname');