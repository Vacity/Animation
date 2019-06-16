import React from 'react';
import './App.css';
import './Animation.css';

function App() {
  return (
    <div className="App">
      <div className='container' style={{background:'#FF8F42'}}>
        
      </div>
      <div className='container' style={{background:'#59488b'}}>
        <div className='icon-line'>
          <div className='clock'></div>
          <div className='battery'></div>
          <div className='coffee'></div>
        </div>
        <div className='icon-line'>
          <div className='search'></div>
          <div className='process'></div>
          <div className='battery'></div>
        </div>
      </div>
      <div className='container' style={{background:'#333'}}>
      
      </div>
    </div>
  );
}

export default App;
