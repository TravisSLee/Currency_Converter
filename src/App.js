import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest'

function App() {
  const [ currencyOptions, setCurrencyOptions] = useState([])
  
  const [fromCurrency, SetFromCurrency] = useState()

  const [toCurrency, SetToCurrency] = useState()
   
  const [amount, setAmount] = useState(1)

  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const FirstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
    })
  }, [])
  
  
  return (
    <> 
      <h1>Convert</h1>
      <CurrencyRow 
      currency={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={e => setFromCurrency(e.target.value)}
      />
      <div classname="equals"> = </div>
      <CurrencyRow 
      currency={currencyOptions}
      selectedCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      />
    </>
  );
}

export default App;
