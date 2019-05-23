import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Books from './Books/Books';

class App extends Component {
  
  state = { 
    books: [ { name: 'Javascript', price: 20, id: 1  },
      { name: 'React', price: 30, id: 2 },
      { name: 'Java', price: 25, id: 3 },
      { name: 'python', price: 35, id: 4 },
      { name: 'Php', price: 45, id: 5 } ]
   }

    render() {

    return (
      <div className="App">
        <Books books={ this.state.books } />
      </div>
    ); 
   
  } 
 
}


class Books extends Component {
  render(){
      return (
          <div>
              { this.props.books.map(book => {
                  return (
                      <Book name={ book.name } price={ book.price } />
                  )
              }) }
          </div>
      )
  }
}


class Book extends Component {
  render(){
      return(
          <li className='list-group-item d-flex' >
             <p> { this.props.name } </p>
             <span className='ml-auto'> ${ this.props.price } </span>
             <div className='mx-4'>
                 <span>
                     <i className="fas fa-trash"></i>
                 </span>
             </div> 
          </li>
      )
  }
}


export default App;
