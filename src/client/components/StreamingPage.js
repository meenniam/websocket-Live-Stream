import React,{Component} from 'react'
import $ from 'jquery'
import socketIOClient from 'socket.io-client'
class StreamingPage extends Component{
  render(){
    return(
      <div>
        <img id="play"></img>
        <div id="loggers"></div>
      </div>
    )
  }
}

export default StreamingPage
