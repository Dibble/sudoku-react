import React, { Component } from 'react'
import styled from 'styled-components'

const DefaultCell = styled.div`
  border: 1px solid #63b6ff;
  padding: 0px 10px;
  margin: -3px;
  font-size: xx-large;
  color: #0b3254;
  background-color: rgb(198, 228, 255, 0.5);
  cursor: pointer;
`

// const SelectedCell = styled.div`
//   border: 1px solid #172b3d;
//   padding: 0px 10px;
//   margin: -3px;
//   font-size: xx-large;
//   color: #0b3254;
//   background-color: rgb(198, 228, 255, 1);
// `

class Cell extends Component {
  constructor (props) {
    super(props)

    this.row = props.row
    this.column = props.column
    this.selectedCell = props.selectedCell

    this.onClick = props.cellClick
    this.value = 9
  }

  render () {
    let cellSelected = this.row === this.selectedCell.row && this.column === this.selectedCell.column

    return <DefaultCell onClick={() => this.onClick(this.row, this.column)}>{cellSelected ? 'selected' : '9'}</DefaultCell>
    // return cellSelected ? <SelectedCell onClick={() => { this.onClick(this.row, this.column) }}>{this.value || ' '}</SelectedCell> : <DefaultCell onClick={() => { this.onClick(this.row, this.column) }}>{this.value || ' '}</DefaultCell>
  }
}

export default Cell
