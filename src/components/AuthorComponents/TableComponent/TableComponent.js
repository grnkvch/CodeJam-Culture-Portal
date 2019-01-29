import React from 'react'
import './table.css'
import idGenerator from 'react-id-generator'

class TableComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    const events = this.props.work.map(event => (
      <tr key={idGenerator()}>
        <td>{event.title}</td>
        <td>{event.date}</td>
      </tr>
    ))
    return (
      <table id="customers">
        <thead>
          <tr>
            <th>Произведение</th>
            <th>Дата создания</th>
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </table>
    )
  }
}
export default TableComponent
