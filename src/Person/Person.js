import React from 'react';
import styled from 'styled-components';
//import './Person.css';

const StyledDiv =  styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    `;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm a { props.name } and i am { props.age }</p>
            <p>{ props.children }</p>
            <input type="text" onChange={props.changed} value={ props.name }></input>
        </StyledDiv>
    )    
}

export default person;