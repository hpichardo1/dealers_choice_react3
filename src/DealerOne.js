import React from 'react'
import Table from './Table'

const DealerOne = (props) =>{
  const { cars, deleteSale, selectClient } = props
  return (
    <div id='container'>
      <Table selectClient={selectClient} cars={cars} deleteSale={deleteSale} /> 
    </div>
  )
}

export default DealerOne