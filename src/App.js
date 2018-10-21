import React, { Component } from 'react'
import CellBlock from './CellBlock'

class App extends Component {
  render () {
    return (
      <table>
        <tr>
          <th> <CellBlock /> </th>
          <th> <CellBlock /> </th>
          <th> <CellBlock /> </th>
        </tr>
        <tr>
          <th> <CellBlock /> </th>
          <th> <CellBlock /> </th>
          <th> <CellBlock /> </th>
        </tr>
        <tr>
          <th> <CellBlock /> </th>
          <th> <CellBlock /> </th>
          <th> <CellBlock /> </th>
        </tr>
      </table>
    )
  }
}

export default App
