import Navbar from './component/navbar.jsx';
import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Visualisation from './pages/Visualisation'
import Intro from './pages/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input_Base from './pages/SpecGraphGNN.jsx';
class App extends Component{
    render()
    {
    return (<>  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/vis' element={<Visualisation/>}/>
          <Route path='/simulate' element={<Input_Base/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      </>);
    }
};
export default App;