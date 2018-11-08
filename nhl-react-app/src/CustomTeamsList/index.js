import React, { Component } from 'react';


class CustomTeamList extends Component {
  constructor(){
    super();
    this.deleteTeam = this.deleteTeam.bind(this);
  }
  deleteTeam = async (_id, event) => {
    console.log(event + 'event');
   event.preventDefault();
   let requestUrl = "";
   requestUrl = ('http://localhost:3001/team/' + this._id.value);
   console.log(requestUrl);
   await fetch(requestUrl, {
    method: 'delete',
    headers: {'Content-Type':'application/json'},
   });
  };
  render(){

    // How do I render lists in React
    const CustomTeamList = this.props.teams.map((team, i) => {
      console.log(team);
      return (
        <li key={i}>
          Team: {team.name} <br/>
          <form onSubmit={this.deleteTeam.bind(null,team._id)}>
            <input ref={(ref) => {this._id = ref}} type="hidden" name="_id" value={team._id}/>
            <input type="submit" value="Delete Team"/><br/>
          </form>

        </li>
        )
    });

    return (
      <div>
        <h4>teamsList</h4>
        <ul>
          {CustomTeamList}
        </ul>
      </div>
      )
  }
}


export default CustomTeamList;
