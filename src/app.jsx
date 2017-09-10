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
      progress: 0,
      isPlaying: true,
      isLoop: false
    }
  }

  prepareAudioEvent = audio => {
    const app = this
    this.setState({
      audio
    })
    audio.addEventListener('canplay', function() {
      if (this.readyState >= 2) {
        audio.play()
        audio.loop = false
        app.setState({
          isPlaying: true
        })
      }
    })
    // audio.addEventListener('progress', function() {
    //   console.log('progress')
    // })

    // audio.addEventListener('play', function() {
    //   console.log('playing')
    // })

    // audio.addEventListener('playing', function() {
    //   app.activeProgress()
    // })

    audio.addEventListener('timeupdate', function() {
      app.activeProgress()
    })

    audio.addEventListener('ended', function() {
      if (app.state.isLoop) {
        this.currentTime = 0
        this.play()
      } else {
        this.pause()
        app.setState({
          isPlaying: false
        })
      }
    })
  }

  activeProgress = () => {
    const $audio = document.getElementById('audio')
    const total = $audio.duration
    const curTime = $audio.currentTime

    this.setState({
      progress: Math.floor(curTime / total * 100)
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

  setLoop = () => {
    this.setState({
      isLoop: !this.state.isLoop
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
          <Controls
            onMainControl={this.onMainControl}
            status={this.state.isPlaying}
            onSetLoop={this.setLoop}
            isLoop={this.state.isLoop}
          />
        </div>
        <audio id="audio" src={mp3} ref={this.prepareAudioEvent}>
          not support
        </audio>
      </div>
    )
  }
}

export default App
