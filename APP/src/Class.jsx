import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(){
        super();
        this.state ={
            name : "",
            email : "",
            password : "",
            gender : "",
            show : null
        }
    }
         handleform = (e) =>{
            e.preventDefault();
            this.setState({show : (this.state.name,this.state.email,this.state.password,this.state.gender)});
            console.log(`Name :${this.state.name},email :${this.state.email},password : ${this.state.password},gender :${this.state.gender}`);
            e.target.reset();
    }
  render() {
    // return (
    //   // <div className='main' onSubmit={this.handleform}>
    //   //   <form action="">
    //   //       <input type="text" placeholder='Name' onChange={(e)=>this.setState({name: e.target.value})}/>
    //   //       <br /><br />
    //   //       <input type="email" placeholder='email' onChange={(e)=>this.setState({email: e.target.value})}/>
    //   //       <br /> <br />
    //   //       <input type="password" placeholder='Password' onChange={(e)=>this.setState({password: e.target.value})}/>
    //   //       <br /> <br />
    //   //       {/* <input type="checkbox" />
    //   //       <label htmlFor=""> Terms & conditions</label> */}
    //   //       <input type="radio" name="gender" id="male" value="male" onChange={(e) => this.setState({gender: e.target.value})}/>
    //   //       <label htmlFor="male" id='male'>Male</label>
    //   //       <input type="radio" name='gender' id='female' value="Female" onChange={(e) => this.setState({gender: e.target.value})}/>
    //   //       <label htmlFor="female" id='female'>Female</label>
    //   //       <br /> <br />
    //   //       <button type='submit'>Submit</button>
    //   //       <br />
    //   //   </form>
    //   //   {this.state.show !== null ? (
    //   //       <>
    //   //       <h2>Name : {this.state.name}</h2>
    //   //       <h2>Email : {this.state.email}</h2>
    //   //       <h2>Password : {this.state.password}</h2>
    //   //       <h2>Gender : {this.state.gender}</h2>
    //   //       </>
    //   //   ):("") }
    //   // </div>
    // )
  }
}
