import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const ToCurrency = () => {
    const {toCurrency, handleToCurrency} = useContext(DataContext)
  return (
   <>
    <div className="input-container">
          <label htmlFor="toCurrency">To Currency:</label>
          <select id="toCurrency" value={toCurrency} onChange={handleToCurrency}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Brithish Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollars</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
          </div>
   </>
  )
}

export default ToCurrency