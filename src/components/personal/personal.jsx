import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './personal.css'

class Personal extends Component {
  render() {
    return (
      <div className="personal">
        <Icon name="external share" disabled={true} />
        <Icon name="star" disabled={true} />
        <Icon name="heart" className="active" />
      </div>
    )
  }
}

export default Personal
