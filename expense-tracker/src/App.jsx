import React from 'react';
import Mainpanel from './Mainpanel';
import './App.css';
import Leftpanel from './Leftpanel';
function App() {
  

  return (
    <div >
    <div className='leftpanel'><Leftpanel/></div>
    
    <div className='mainpanel'><Mainpanel/></div>
    </div>
  )
}

export default App
