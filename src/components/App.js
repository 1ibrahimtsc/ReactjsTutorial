import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import First from './First/First'

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <First name='Mr Ibrahim' designation='software programmer and webdevloper' location='Dhaka, Bangladesh' />

        <First name='Mr Rana' designation='webdegiener' location='Kustia, Bangladesh' />
        
        
      </div>
    ); 
   
  } 

 
}

export default App;
