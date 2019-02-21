import React, { Component } from 'react'
import CellBlock from './CellBlock'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedCell: { row: null, column: null }
    }

    this.cellClick = this.cellClick.bind(this)
  }

  cellClick (row, column) {
    this.setState({ selectedCell: { row, column } })
    console.log('cell clicked', row, column, this.state.selectedCell)
  }

  render () {
    return (
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={0} column={0} /> </th>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={0} column={1} /> </th>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={0} column={2} /> </th>
          </tr>
          <tr>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={1} column={0} /> </th>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={1} column={1} /> </th>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={1} column={2} /> </th>
          </tr>
          <tr>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={2} column={0} /> </th>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={2} column={1} /> </th>
            <th> <CellBlock cellClick={this.cellClick} selectedCell={this.state.selectedCell} row={2} column={2} /> </th>
          </tr>
        </tbody>
      </table >
    )
  }
}

export default App
