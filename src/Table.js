import React from 'react'
import Rows from './Rows'

const Table = (props) => {
  const { cars, deleteSale, selectClient } = props
  return (
    <table id='table'>
      <tbody>
        <tr className='row'>
          <td>Brand</td>
          <td>Model</td>
          <td>Type</td>
          <td>Price</td>
          <td>Client</td>
          <td>DELETE</td>
        </tr>
        {
          cars.map((carObj) => {
            return (
              <Rows selectClient={selectClient} deleteSale={deleteSale} carObj={carObj} brand={carObj.brand} model={carObj.model} type={carObj.type} key={carObj.id} price={carObj.price} clientName={carObj.client.name} />
            )
          })
        }
      </tbody>
</table>
  )
}

export default Table

//insert array row data line 11-12