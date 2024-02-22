import { createContext } from "react";
import currencyapi from "../api/currencyapi"
import { useEffect, useState } from 'react'

const DataContext = createContext({})

export const DataProvider = ({children}) =>{

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR")
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [exchangeRate, setExchangeRate] = useState(null)
  
    useEffect(()=>{
      const getExchangeRate = async () =>{
        try{
          const api = currencyapi(fromCurrency)
          const response = await api.get()
          setExchangeRate(response.data.rates[toCurrency])
        }catch(err){
          console.error("Error fetching exchange rate:", err)
        }
      }
      getExchangeRate()
    },[fromCurrency,toCurrency])
  
    useEffect(()=>{
      if(exchangeRate!==null){
        setConvertedAmount((amount * exchangeRate).toFixed(2))
      }
    },[amount,exchangeRate])
  
    const handleAmountChange = (e) =>{
      const value = parseFloat(e.target.value)
      setAmount(isNaN(value) ? 0 : value)
    }
  
    const handleFromCurrency = (e) =>{
      setFromCurrency(e.target.value)
    }
  
    const handleToCurrency = (e) =>{
      setToCurrency(e.target.value)
    }
    return(
        <DataContext.Provider value={{
                amount,handleAmountChange,fromCurrency,handleFromCurrency,toCurrency,handleToCurrency,convertedAmount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext