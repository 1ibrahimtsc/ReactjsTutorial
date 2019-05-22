import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = { name: '' }

  clickHandler = (event) => {
   // alert('I have clicked')
    console.log(event.target.value)
  }

  inputHandler = (event) => {
    
    this.setState({
      name: event.target.value
    }) 
    //console.log(event.target.value)
  }

  render() {

    return (
      <div className="App">
        <div className="container my-3">
          <input onChange={ this.inputHandler }
          type="text" value={ this.state.name } placeholder="Enter Your Name"
           />
          <button className="btn btn-primary" onClick={ (event) => console.log(event) } >Click Me</button>
        </div>

        { this.state.name ? <p>Hello Mr . { this.state.name } </p> : '' }
      </div>
    ); 
   
  } 
 
}

export default App;
