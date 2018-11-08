import React, { Component } from 'react';


class TeamList extends Component {

  render(){

    // How do I render lists in React
    const TeamList = this.props.teams.map((team, i) => {
      console.log(team);
      return (
        <li key={i}>
          Team: {team.name} <br/>


        </li>
        )
    });

    return (
      <div>
        <h4>teamsList</h4>
        <ul>
          {TeamList}
        </ul>
      </div>
      )
  }
}


export default TeamList;
