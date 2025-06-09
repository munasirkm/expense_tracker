import React from 'react';
import Mainpanel from './components/Mainpanel';
import './App.css';
import Leftpanel from './components/Leftpanel';
function App() {
  

  return (
    <div className='app_container'>
      <div className='main_layout'>
        <div className='leftpanel'><Leftpanel/></div>
        <div className='mainpanel'><Mainpanel/></div>
      </div>
    
    </div>
  )
}

export default App
