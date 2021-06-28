import React from 'react'

const ClientRow = (props) => {
  const {selectedClient} = props
  console.log(selectedClient)
  return (

    <tr key={selectedClient.id} className='row' >
      <td>{selectedClient.name}</td>
      <td>{selectedClient.age}</td>
      <td>{selectedClient.purchaseDate}</td>
      <td>{selectedClient.email}</td>
    </tr>

  )

}

export default ClientRow