import React,{Component} from 'react'
import $ from 'jquery'
import socketIOClient from 'socket.io-client'
class StreamerPage extends Component{
  render(){
    return(
      <div>
        <video src="" id="video" style={{'width':'680px','height':'380px'}} autoPlay></video>

        <canvas id="preview"></canvas>

        <div id="logger"></div>
      </div>
    )
  }
}

export default StreamerPage
