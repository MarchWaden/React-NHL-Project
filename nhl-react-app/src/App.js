import React, { Component } from 'react';

import TeamsList from './TeamsList';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      teams: []
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
  componentDidMount(){

    // we are using a Promise, .then, wafter this function returns whatever it is returning
    // in our case crimesJson
    this.getNHL().then((data) => {

      console.log(data);
      this.setState({teams: data.teams});

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
        <TeamsList teams={this.state.teams}/>
      </div>
    );
  }
}

export default App;
