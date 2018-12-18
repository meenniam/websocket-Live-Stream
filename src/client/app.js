import React,{Component} from 'react'
import './app.css'
import $ from 'jquery'
import socketIOClient from 'socket.io-client'
import Main from './components/main'
import {Link} from 'react-router-dom'

class App extends Component{
  componentDidMount(){
    var canvas = document.getElementById('preview')
    var context = canvas.getContext('2d')
    var video = document.getElementById('video')
    canvas.width = 500;
    canvas.height = 400;

    context.width = canvas.width;
    context.height = canvas.height;

    const socket = socketIOClient('http://localhost:8000')
    function logger(msg) {
      $('#logger').text(msg)
    }

    function loadCam(stream) {
      video.src = window.URL.createObjectURL(stream)
      logger('camera correct')
    }

    function loadFail() {
      logger('camera no connect')
    }

    function viewVideo(video,context) {
      context.drawImage(video,0,0,context.width,context.height)
      socket.emit('stream',canvas.toDataURL('image/webp'))
    }
    socket.on('stream',function(image){
            $('#play').attr('src',image);
            $('#loggers').text(image);
    });
    $(()=>{
      navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUsermedia ||
      navigator.msgGetUserMedia)
      if(navigator.getUserMedia){
        navigator.getUserMedia({video:true},loadCam,loadFail)
      }
      setInterval(()=>{
        viewVideo(video,context)
      },1)
    })
  }
  render(){
    return(
      <div>
        <h1>
          WEB SOCKET
        </h1>
        <div>
          <Link to="/">StreamerPage</Link>
          <Link to="/streaming">StreamingPage</Link>
        </div>
        <Main></Main>

      </div>
    )
  }
}

export default App
