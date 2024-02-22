import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Result = () => {
    const {amount, fromCurrency,convertedAmount,toCurrency} = useContext(DataContext)
  return (
   <>
    <div className="result">
            <p><span>{amount} </span>{fromCurrency} is equal to <span>{convertedAmount}</span> {toCurrency}</p>
         </div>
   </>
  )
}

export default Result