import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './controls.css'

class Controls extends Component {
  playControl() {
    if (this.props.status) {
      return <Icon className="main_control" name="pause circle" />
    }
    return <Icon className="main_control" name="video play" />
  }

  render() {
    return (
      <div className="controls">
        <div className="main-control-box">
          {this.playControl()}
          <Icon name="backward" />
          <Icon name="forward" />
        </div>
        <div>
          <Icon name="retweet" disabled={true} />
          <Icon name="random" disabled={true} />
        </div>
      </div>
    )
  }
}
export default Controls
