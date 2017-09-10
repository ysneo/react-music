import React, { Component } from 'react'
import Avatar from './components/avatar/avatar.jsx'
import Song from './components/song/song.jsx'
import Personal from './components/personal/personal.jsx'
import MyProgress from './components/progress/progress.jsx'
import Controls from './components/controls/controls.jsx'

import 'semantic-ui-css/semantic.min.css'
import './app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      song: {
        author: 'Charlie Puth',
        special: 'Ego',
        name: 'Look At Me Now'
      },
      progress: 10
    }
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
          <Controls />
        </div>
      </div>
    )
  }
}

export default App
