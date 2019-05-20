import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {

    let h = 'Welcome to React - Redux Complete Course .'
    let p1 = 'Twinkle Cats .'
    let p2 = 'This is a sample content .'
    return (
      <div className="App">
        <h1> { h } </h1>
        <p> hi {p1 ? p1 : 'no data'} {p2} </p>
        
      </div>
    ); 
   /*

    return React.createElement('div', {className: 'App'}, [
      React.createElement('h1', null, 'Welcome to React - Redux Complete Course'),
      React.createElement('p', null, 'This is a sample content.'), 
      React.createElement('p', {className: 'ptag'}, 'This is a sample content.'),
    ] )
 
    */

  } 

 
}

export default App;
