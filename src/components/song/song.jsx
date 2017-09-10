import React, { Component } from 'react'

class Song extends Component {
  constructor() {
    super()
  }
  render() {
    const { author, special, name } = this.props.songInfo
    return (
      <div>
        <p className="song_author">{author}</p>
        <p className="song_special">{special}</p>
        <p className="song_name">{name}</p>
      </div>
    )
  }
}

export default Song
