import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

class MyProgress extends Component {
  render() {
    return <Progress percent={this.props.percent} size="tiny" color="orange" active />
  }
}

export default MyProgress
