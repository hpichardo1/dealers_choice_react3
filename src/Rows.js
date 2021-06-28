import React from 'react'

const Row = (props) =>{
  const { carObj, deleteSale, selectClient } = props
  
  return (
    <tr key={carObj.id} className='row' >
      <td>{carObj.brand}</td>
      <td>{carObj.model}</td>
      <td>{carObj.type}</td>
      <td>{carObj.price}</td>
      <td>
        <a id='clientname' onClick={()=> selectClient(carObj.client.id)}>
        {carObj.client.name}
          </a> 
      </td>
      <td> 
        <button onClick={ () => deleteSale(carObj.id)} >
          X
        </button>
      </td>
    </tr>
  )
}

export default Row