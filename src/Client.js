import React from 'react'
import ClientRow from './ClientRow'

const Client = (props) => {
  const { selectedClient } = props
  
  return (
    <div id='container'>
       <table id='table'>
      <tbody>
        <tr className='row'>
          <td>Client</td>
          <td>Age</td>
          <td>Date</td>
          <td>Email</td>
          <td>Car List</td>
        </tr>
        {
        Object.entries(selectedClient).length === 0 ?
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> 
        : <ClientRow selectedClient={selectedClient} />
        }
        

      </tbody>
</table>
    </div>
  )
}

export default Client
