import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class Controls extends Component {
  render() {
    return (
      <div>
        <Icon name="video play" size={'huge'} />
        <Icon name="pause circle" size={'huge'} />
        <Icon name="backward" size={'big'} />
        <Icon name="forward" size={'big'} />
      </div>
    )
  }
}
export default Controls
