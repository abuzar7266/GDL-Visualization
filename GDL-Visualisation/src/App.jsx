import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
    render()
    {
    return (<>  
    <div>
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