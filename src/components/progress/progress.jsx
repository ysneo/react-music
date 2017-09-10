import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'
import './progress.css'
class MyProgress extends Component {
  render() {
    return <Progress className="myProgress" percent={this.props.percent} size="tiny" active />
  }
}

export default MyProgress
