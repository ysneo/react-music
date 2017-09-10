import React, { Component } from 'react'
import Avatar from './components/avatar/avatar.jsx'
import Song from './components/song/song.jsx'
import Personal from './components/personal/personal.jsx'
import MyProgress from './components/progress/progress.jsx'
import Controls from './components/controls/controls.jsx'

import 'semantic-ui-css/semantic.min.css'
import './app.css'

import mp3 from './demo/Charlie-Puth-Look-At-Me-Now.mp3'

class App extends Component {
  constructor() {
    super()
    this.state = {
      audio: null,
      song: {
        author: 'Charlie Puth',
        special: 'Ego',
        name: 'Look At Me Now'
      },
      progress: 10,
      isPlaying: true
    }
  }

  prepareAudio = audio => {
    const app = this
    this.setState({
      audio
    })
    audio.addEventListener('canplay', function() {
      if (this.readyState >= 2) {
        audio.play()
        app.setState({
          isPlaying: true
        })
      }
    })
  }

  onMainControl = () => {
    const $audio = document.getElementById('audio')
    if ($audio.paused) {
      $audio.play()
    } else {
      $audio.pause()
    }
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  }

  render() {
    return (
      <div>
        <Avatar />
        <div className="player">
          <div className="song-info">
            <Song songInfo={this.state.song} />
            <Personal />
          </div>
          <MyProgress percent={this.state.progress} />
          <Controls onMainControl={this.onMainControl} status={this.state.isPlaying} />
        </div>
        <audio id="audio" src={mp3} ref={this.prepareAudio}>
          not support
        </audio>
      </div>
    )
  }
}

export default App
