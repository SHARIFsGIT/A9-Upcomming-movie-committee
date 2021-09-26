import React from 'react';
import './Team.css'

const Team = (props) => {
   const {team} =props;
    let total = 0;
    for(const member of team){
        total = total+member.salary;
        
    }
    return (
        <div className="team-style">
            <h2>Team Combination</h2>
            <h4>Member added: {props.team.length}</h4>  
            <h4>Member's total salary: {total}</h4>     
            <ol>
                {
                    team.map((fullName)=><li key={fullName.key}>{fullName.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Team;