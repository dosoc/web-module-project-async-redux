import React, {useEffect} from 'react';
import './App.css';
import {updatePrice} from './actions/actions'
import { connect } from 'react-redux'

import DisplayPrice from './components/displayPrice'

function App(props) {
  useEffect(()=>{
    props.updatePrice()
  },[])
  return (
    <div className="App">
      <DisplayPrice/>
    </div>
  );
}

export default connect(st=>st, {updatePrice})(App);