import React, { Component } from 'react'
import Cell from './Cell'

class CellBlock extends Component {
  render () {
    return (
      <table>
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
      </table>
    )
  }
}

export default CellBlock
