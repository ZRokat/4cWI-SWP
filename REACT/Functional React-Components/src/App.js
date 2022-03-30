import Counter from './Comps/Counter';
import './App.css';
import CounterFunk from './Comps/CounterFunk';
import { useState } from 'react';



function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterFunk/>
    </div>
  );
}

export default App;
