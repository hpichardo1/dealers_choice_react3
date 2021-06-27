import React from 'react'

const Row = (props) =>{
  const { carObj, deleteSale } = props
  
  return (
    <tr key={carObj.id} className='row' >
      <td>{carObj.brand}</td>
      <td>{carObj.model}</td>
      <td>{carObj.type}</td>
      <td>{carObj.price}</td>
      <td>{carObj.client.name}</td>
      <td> 
        <button onClick={ () => deleteSale(carObj.id)} >
          X
        </button>
      </td>
    </tr>
  )
}

export default Row