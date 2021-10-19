import React from 'react';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <> 
      <h1>Convert</h1>
      <CurrencyRow />
      <div classname="equals"> = </div>
      <CurrencyRow />
    </>
  );
}

export default App;
