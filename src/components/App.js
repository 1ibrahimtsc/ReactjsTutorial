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
    
   changeHandler = (name, id) => {
      let newBooks = this.state.books.map(book => {
        if(id === book.id){
          return {
            ... book,
            //name: name
            name
          }
        }
        return book
      })

      this.setState({
        books: newBooks
      })
   }
    
    render() {

    return (
      <div className="App">
        <Books
        changeHandler={ this.changeHandler.bind(this) }
        deleteHandler={ this.deleteHandler.bind(this) } 
        books={ this.state.books }
         />
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
                      <Book
                      changeHandler={ this.props.changeHandler } 
                      deleteHandler={ this.props.deleteHandler }
                      book={ book } 
                      />
                  )
              }) }
          </div>
      )
  }
}


class Book extends Component {

  state = {
    isEditable: false
  }
  render(){

    let output = this.state.isEditable ? 
    <input 
    onChange={ (e) => this.props.changeHandler(e.target.value, this.props.book.id) }
    type='text' placeholder='Enter Name' value={ this.props.book.name } /> : <p> { this.props.book.name }</p>
      return(
          <li className='list-group-item d-flex' >
            { output }
             <span className='ml-auto'> ${ this.props.book.price } </span>
             <div className='mx-4'>
                 <span style={{cursor: 'pointer'}} onClick={ ()=> this.setState({isEditable: true })} className='mx-2'> <i className="fas fa-edit"></i></span>
                 <span style={{cursor: 'pointer'}} onClick={ () => this.props.deleteHandler(this.props.book.id) } >
                     <i className="fas fa-trash"></i>
                 </span>
             </div> 
          </li>
      )
  }
}


export default App;
