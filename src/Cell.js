import React, { Component } from 'react'
import styled from 'styled-components'

const DefaultCell = styled.div`
  border: 1px solid #63b6ff;
  padding: 0px 10px;
  margin: -3px;
  font-size: xx-large;
  color: #0b3254;
  background-color: rgb(198, 228, 255, 0.5);
`

class Cell extends Component {
  constructor (props) {
    super(props)

    this.value = props.value
    this.value = 9
  }

  render () {
    return <DefaultCell>{this.value || ' '}</DefaultCell>
  }
}

export default Cell
