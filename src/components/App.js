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

   deleteHandler =(id) => {
     let newBooks = this.state.books.filter(book => book.id != id)
     this.setState({
       books:newBooks
     })
   }

    render() {

    return (
      <div className="App">
        <Books deleteHandler={this.deleteHandler.bind(this) } books={ this.state.books } />
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
                      <Book deleteHandler={ this.props.deleteHandler } book={ book } />
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
             <p> { this.props.book.name } </p>
             <span className='ml-auto'> ${ this.props.book.price } </span>
             <div className='mx-4'>
                 <span onClick={ () => this.props.deleteHandler(this.props.book.id) } >
                     <i className="fas fa-trash"></i>
                 </span>
             </div> 
          </li>
      )
  }
}


export default App;
