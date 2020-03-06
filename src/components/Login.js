import React, { useState } from 'react';
import fire from '../config/Fire';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange(event) {
  this.setState({email: document.querySelector('#email').value});
}

handleSubmit(event) {
  alert('Welcome to the game  ' + document.querySelector('#email').value);
  event.preventDefault();

  this.props.get(this.state.email)
 
}




    signUp() {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
          console.log('Successfully Signed Up');
        })
        .catch((err) => {
          console.log('Error: ' + err.toString());
        })
    }
  
    login() {
     const email = document.querySelector('#email').value;
     
    
      const password = document.querySelector('#password').value;
      fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
          console.log('Successfully Logged In');
        })
        .catch((err) => {
          console.log('Error: ' + err.toString());
        })
    }

    
    render() {
      
      
      return (
       
        <div style={{ textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
        <div>
            <div>Email</div>
            <input id="email" placeholder="Enter Email.."  type="text"
            value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <div>Password</div>
            <input id="password" placeholder="Enter Password.."
           type="text" />
          </div>
          <button style={{margin: '10px'}} type="submit" 
           onClick={()=>{this.login(); console.log(this.state.email)}}  >Login</button>
         
          <button style={{margin: '10px'}} onClick={this.signUp} >Sign Up</button>
      
       
          </form>
          </div>
       
        
      )
    }
  }
  


  export default Login;