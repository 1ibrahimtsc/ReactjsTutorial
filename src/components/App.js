import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import First from './First/First';
import Counter from './Counter/Counter';

class App extends Component {
  
  state = {
    person: [
      { name: 'ibrahim', email: 'ibrahimvoc@yahoo.com', address: 'Mirpur, Dhaka' },
      { name: 'Rony', email: 'Rony@yahoo.com', address: 'Danmondi, Dhaka' },
      { name: 'Anis', email: 'Anis@yahoo.com', address: 'Mirpur, Dhaka' }
    ]
  }

  render() {

    return (
      <div className="App">
        { this.state.person.map((people, index) => {
          return <First 
                  key={ index } 
                  name={ people.name } 
                  email={ people.email } 
                  address= { people.address } 
                  />
        }) }

        <Counter />
      </div>
    ); 
   
  } 

 
}

export default App;
