import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './controls.css'

class Controls extends Component {
  playControl() {
    if (this.props.status) {
      return (
        <Icon onClick={this.props.onMainControl} className="main_control" name="pause circle" />
      )
    }
    return <Icon onClick={this.props.onMainControl} className="main_control" name="video play" />
  }

  get loopValue() {
    return this.props.isLoop
  }

  render() {
    // const { isLoop } = this.props.isLoop
    return (
      <div className="controls">
        <div className="main-control-box">
          {this.playControl()}
          <Icon name="backward" />
          <Icon name="forward" />
        </div>
        <div>
          <Icon
            name="retweet"
            onClick={this.props.onSetLoop}
            disabled={!this.loopValue}
            className={this.loopValue ? 'active' : null}
          />
          <Icon name="random" disabled={true} />
        </div>
      </div>
    )
  }
}
export default Controls
