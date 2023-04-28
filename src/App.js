import React , {Component} from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar2 from './componet/navbar';
import Contact from './componet/contact';
import Index from './componet/index';
import About from './componet/protflio';
import Protflio from './componet/profile';
import Work from './componet/work';
import Socialmedia from './componet/socialmedia';

class App extends Component  {
  render(){
  return (
    
    <BrowserRouter>
    <div className='app'>
    <Navbar2 />
    
     <Routes>
          <Route path='/' Component={Index} />
          <Route path='/about' Component={About}/>
          <Route path='/work' Component={Work}/>
          <Route path='/protflio' Component={Protflio}/>
          <Route path='/socialmedia' Component={Socialmedia}/>
          <Route path='/contact' Component={Contact} />
    </Routes>
    
    </div>
    </BrowserRouter>
  
  );
}
}

export default App;
