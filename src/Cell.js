import React, { Component } from 'react'

class Cell extends Component {
  constructor (props) {
    super(props)

    this.value = props.value
    this.value = 9
  }

  render () {
    return <div>{this.value || ' '}</div>
  }
}

export default Cell
