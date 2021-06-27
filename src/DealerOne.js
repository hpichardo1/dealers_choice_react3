import React from 'react'
import Table from './Table'

const DealerOne = (props) =>{
  const { cars, deleteSale } = props
  return (
    <div id='container'>
      <Table cars={cars} deleteSale={deleteSale} /> 
    </div>
  )
}

export default DealerOne