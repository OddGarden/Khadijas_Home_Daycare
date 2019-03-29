import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom"
import {Home} from './home';
import {About} from './about';
import {Gallery} from './gallery';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <>
      
      <div className="App">
      <img src='/img/daycare.png' alt="business logo" className="logo"/>
       <Router>
        <Link to ='/'><button>Home</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Link to='/gallery'><button>Gallery</button></Link>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/gallery" component={Gallery}/>
        

       </Router>
      </div>
      </>
    );
  }
}

export default App;
