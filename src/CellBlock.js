import React, { Component } from 'react'
import Cell from './Cell'
import styled from 'styled-components'

const Block = styled.table`
  border: 2px solid #63b6ff;
  margin: -2px;
`

class CellBlock extends Component {
  render () {
    return (
      <Block>
        <tr>
          <th> <Cell /> </th>
          <th> <Cell /> </th>
          <th> <Cell /> </th>
        </tr>
        <tr>
          <th> <Cell /> </th>
          <th> <Cell /> </th>
          <th> <Cell /> </th>
        </tr>
        <tr>
          <th> <Cell /> </th>
          <th> <Cell /> </th>
          <th> <Cell /> </th>
        </tr>
      </Block>
    )
  }
}

export default CellBlock
