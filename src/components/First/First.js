import React, { Component } from 'react'

class First extends Component {

    render(){
      return (
          <div>
              <h1> I am { this.props.name } </h1>
              <p> I am a { this.props.designation } </p>
              <p> I live in { this.props.location } </p>
          </div>
      )
      
    }
}

export default First