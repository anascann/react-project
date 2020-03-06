import React, { Component } from 'react'
//import SignIn from './components/SignIn'

import fire from './config/Fire'
import Login from './components/Login'
//import Board from './components/Board'
import Game from './components/Game'


export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      user:null,
      email: ''
      
    }
    this.authListener=this.authListener.bind(this)
  

  }

  
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
if(user){
  this.setState({user});
  
}else{
  this.setState({user: null})
}

    })

  }


  mycallback=(datafromchild)=>{
this.setState({email: datafromchild})
  }
  render() {
    return (
     <div className="App">
   
     {this.state.user ? (<Game  emailfrom={this.state.email}/>): (<Login get={this.mycallback}/>)}
  
     </div>
    )
  }
}

export default App;
