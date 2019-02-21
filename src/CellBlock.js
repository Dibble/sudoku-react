import React, { Component } from 'react'
import Cell from './Cell'
import styled from 'styled-components'

const Block = styled.table`
  border: 2px solid #63b6ff;
  margin: -2px;
`

class CellBlock extends Component {
  constructor (props) {
    super(props)

    this.cellClick = props.cellClick
    this.selectedCell = props.selectedCell
    this.row = props.row
    this.column = props.column

    console.log('cellblock', this.row, this.column)
  }

  render () {
    return (
      <Block>
        <tbody>
          <tr>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={this.row * 3} column={this.column * 3} /> </th>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={this.row * 3} column={(this.column * 3) + 1} /> </th>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={this.row * 3} column={(this.column * 3) + 2} /> </th>
          </tr>
          <tr>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={(this.row * 3) + 1} column={this.column * 3} /> </th>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={(this.row * 3) + 1} column={(this.column * 3) + 1} /> </th>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={(this.row * 3) + 1} column={(this.column * 3) + 2} /> </th>
          </tr>
          <tr>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={(this.row * 3) + 2} column={this.column * 3} /> </th>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={(this.row * 3) + 2} column={(this.column * 3) + 1} /> </th>
            <th> <Cell cellClick={this.cellClick} selectedCell={this.selectedCell} row={(this.row * 3) + 2} column={(this.column * 3) + 2} /> </th>
          </tr>
        </tbody>
      </Block>
    )
  }
}

export default CellBlock
