import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Amount = () => {
    const {amount,handleAmountChange} =useContext(DataContext)
  return (
   <>
    <div className="input-container">
          <label htmlFor="amt">Amount:</label>
          <input type="number" id="amt" value={amount} onChange={handleAmountChange} />
        </div>
   </>
  )
}

export default Amount