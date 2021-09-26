import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Member.css'

const Member = (props) => {
    const {name, age, number, mail, salary, img}=props.member;
    return (
        <div className="member-style">
            <img src={img} alt="models" />
            <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Number: {number}</p>
            <p>E-mail: {mail}</p>
            <p>Salary: {salary}</p>
            </div>
            <button onClick={()=>props.handleAddToTeam(props.member)}
            ><FontAwesomeIcon icon={faUserPlus}/> Add to team</button>
        </div>
    );
};

export default Member;