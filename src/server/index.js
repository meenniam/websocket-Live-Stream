const express = require('express')
const log = require('log')
const app = express()
var port = process.env.PORT || 8000;
const server = app.listen(port,()=>{
  Log.info('Server running port '+port)
  console.log('server running port '+port);
})
const io = require('socket.io').listen(server)
const Log = require('log')

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 ,// some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
}

app.use(cors(corsOptions))


io.on('connection',(client)=>{
  console.log('user connected');
  client.on('stream',(image)=>{
    //console.log(image);
    client.broadcast.emit('stream',image)
  })
  client.on('disconnect', function () {
    console.log("user disconnected");
  });
})
