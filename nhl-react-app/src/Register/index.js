import React, { Component } from 'react';

class Register extends Component {

  render(){

    return(
      <div>
      <form action="http://localhost:3001/user/new" method="post">
      Username:<input type="text" name="username"/><br/>
      Password:<input type="password" name="password"/><br/>
      <input type="submit"/><br/>
      </form>
      </div>
    )
  }
}

export default Register;
