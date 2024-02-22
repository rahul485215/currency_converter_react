import './App.css'
import Header from './Header';
import Amount from './Amount';
import FromCurrency from './FromCurrency';
import ToCurrency from './ToCurrency';
import Result from './Result';

import { DataProvider } from './context/DataContext';

function App() {
 
  return (
   
   <div className="currency-converter">
    <div className="box"> </div>
      <div className="data">
        <DataProvider>
          <Header title="currency converter" />

          <Amount />

          <FromCurrency />

          <ToCurrency />

          <Result /> 
        </DataProvider>   
    </div>
   </div>
   
  )
}

export default App
