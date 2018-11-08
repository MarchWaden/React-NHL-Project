import React, { Component } from 'react';

import CustomTeamsList from './CustomTeamsList';
import TeamsList from './TeamsList';
import Register from './Register';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      teams: [],
      customTeams: []
    }

    this.submitTeam = this.submitTeam.bind(this);
  }
  getCustomTeams = async() => {
    try{
      const CustomTeams = await fetch('http://localhost:3001/team');

      const CustomTeamsJson = await CustomTeams.json();

      return CustomTeamsJson;

    }catch(err){
      console.log(err);
    }
  }
  getNHL = async () => {

    try{

      const NHL = await fetch('https://statsapi.web.nhl.com/api/v1/teams');

      const  NHLJson = await NHL.json();

      return NHLJson

    } catch(err){
      return err
    }

  }
  submitTeam = async (event) => {
   event.preventDefault();
   console.log(this.name.value);
   await fetch('http://localhost:3001/team/new', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
     name: this.name.value
   })
   });
   this.componentDidMount()
  };
  componentDidMount(){

    // we are using a Promise, .then, wafter this function returns whatever it is returning
    // in our case crimesJson
    this.getNHL().then((data) => {

      console.log(data);
      this.setState({teams: data.teams});
    }).catch((err) => {



    });
    this.getCustomTeams().then((data) => {

      console.log(data);
      this.setState({customTeams: data});
    }).catch((err) => {

    });
    // componentDidMount, like render, and constructor are part of the component lifectyle,
    // that means these functions get called automatically

    // ComponentDidMount is where you will make any get requests, set up sockets (chat room),
    // set up firebase (direct db)

    // ComponentDidMount represents is when the component is actually mounted on to the
    // DOM

    // This is where we make get requests if we want are data to be loaded on the page
    // immediatly
  }
  render() {
    return (
      <div className="App">
        <div id="Add Team">
          <form onSubmit={this.submitTeam}>
            Team Name:<input ref={(ref) => {this.name = ref}} type="text" name="name"/><br />
            <input type="submit"/><br/>
          </form>
        </div>
        <Register/>
        Custom Teams:<CustomTeamsList teams={this.state.customTeams}/>
        Official Teams:<TeamsList teams={this.state.teams}/>
      </div>
    );
  }
}

export default App;
