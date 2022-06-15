import React, {useEffect} from 'react';
import './App.css';
import {updatePrice} from './actions/actions'

import DisplayPrice from './components/displayPrice'

function App() {

  useEffect(()=> {
    updatePrice()
  })
  return (
    <div className="App">
      <DisplayPrice/>
    </div>
  );
}

export default App;