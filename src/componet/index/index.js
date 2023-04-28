import React , {Component} from 'react';

import Home from './../home';
import About from './../about';

import Footer from './../foooter';
import Profile from './../profile';
import Protflio from './../protflio';
import Work from './../work';

import Socialmedia from './../socialmedia';

class Index extends Component  {
  render(){
  return (
    <div className="App">
    <Home />
    <Work />
    <Protflio />
    <Profile />
    <About />
    <Footer />
          
      
    </div>
  );
}
}

export default Index;