import React from 'react'

const initialState = {
        name: '',
        email: '',
        password: '',
        bio: '',
        country: '',
        gender: '',
        skills:[]
}
class PostForm extends React.Component{
    constructor(){
        super()
        this.MyForm = React.createRef()
    }
    state = initialState;

    changeHandler = (event) => {
      if(event.target.type === 'checkbox'){
          if(event.target.checked){
           this.setState({
               ... this.state,
               skills: this.state.skills.concat(event.target.value)
           })
          } else {
              this.setState({
                  ... this.state,
                  skills: this.state.skills.filter(skill => skill != event.target.value)
              })
          }
      } else {
        this.setState({
            [event.target.name]:event.target.value
        })
      }
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
            <div className='form-group'>
                <label htmlFor='country' >Chooch Your Country</label>
                <select onChange={ this.changeHandler } className='form-control' name='country' id='country'>
                  <option >Choose Your Country</option>
                  <option value='Bangladesh' >Bangladesh</option>
                  <option value='India' >India</option>
                  <option value='Pakistan' >Pakistan</option>
                </select>                
            </div>
            <div className='form-check'>                
                <input type='radio'  name='gender' id='gender1' value='Male' onChange={ this.changeHandler }
                />
                <label htmlFor="gender1">Male</label>
            </div>
            <div className='form-check'>                
                <input type='radio'  name='gender' id='gender2' value='Female' onChange={ this.changeHandler }
                />
                <label htmlFor="gender2">Female</label>
            </div>
            <div className='form-check'>                
                <input type='radio'  name='gender' id='gender3' value='Others' onChange={ this.changeHandler }
                />
                <label htmlFor="gender3">Others</label>
            </div>

            <div className='form-group'>
                <div className='form-check'>
                <input name='skill' className='form-check-input' type='checkbox' id='js' value='Javascript' onChange={ this.changeHandler } />
                <label htmlFor="js">Javascript</label>         
                </div>
                <div className='form-check'>
                <input name='skill' className='form-check-input' type='checkbox' id='java' value='Java' onChange={ this.changeHandler } />
                <label htmlFor="java">Java</label>         
                </div>
                <div className='form-check'>
                <input name='skill' className='form-check-input' type='checkbox' id='php' value='php' onChange={ this.changeHandler } />
                <label htmlFor="php">php</label>         
                </div>               
            </div>
            <button className='btn btn-primary'>submit</button>
        </form>
        )
        
    }
}

export default PostForm