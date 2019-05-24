import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Books from './Books/Books';

import axios from 'axios';


class App extends Component {

    state = {
      posts: []
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data
        })
      })
      .catch(error => console.log(error))
    }
    render() {
   // console.log(this.state)
    let { posts } = this.state
    if(posts.length === 0){
     return <h1 style={{textAlign: 'center'}}> Loading... </h1>
    } else {
      return (
        <div className='container'>
          <ul className='list-group'>
           { posts.map(post => <li key={post.id } className='list-group-item'> { post.title } </li>) }
          </ul>
        </div>
      )
    }
   
  } 
 
}


export default App;
