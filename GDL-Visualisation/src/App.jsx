import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
class App extends Component{
    render()
    {
    return (<>  
    <div style={{marginTop:0}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      </>);
    }
};
export default App;