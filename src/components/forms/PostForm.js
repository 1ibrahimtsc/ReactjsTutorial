import React from 'react'

const initialState = {
        name: '',
        email: '',
        password: '',
        bio: ''
}
class PostForm extends React.Component{
    constructor(){
        super()
        this.MyForm = React.createRef()
    }
    state = initialState;

    changeHandler = (event) => {
      this.setState({
          [event.target.name]:event.target.value
      })
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
        //this.myForm.current.reset() 
        // here showing error
        this.setState({
            ... initialState
        })
    }

    render(){
        return (
            <form REF={ this.myForm } onSubmit={ this.submitHandler } >
            <div className='form-group'>
                <label htmlFor='name'>Enter Your Name</label>
                <input className='form-control' type='text' placeholder='Enter Your Name' name='name' id='name' value={ this.state.name }
                onChange={ this.changeHandler }
                />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Enter Your email</label>
                <input className="form-control" type='email' placeholder='Enter Your email' name='email' id='email' value={ this.state.email }
                onChange={ this.changeHandler }
                />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Enter Your Password</label>
                <input className="form-control" type='password' placeholder='Enter Your Password' name='password' id='password' value={ this.state.password }
                onChange={ this.changeHandler }
                />
            </div>

            <div className='form-group'>
                <label htmlFor='bio' >Enter Your bio</label>
                <textarea className='form-control' type='password' placeholder='Enter Your bio' name='bio' id='bio' value={ this.state.bio }
                onChange={ this.changeHandler }
                />
            </div>
            <button className='btn btn-primary'>submit</button>
        </form>
        )
        
    }
}

export default PostForm