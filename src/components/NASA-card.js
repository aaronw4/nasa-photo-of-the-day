import React from "react";
import {Date} from "./DateButton";
import styled from 'styled-components';

const Container = styled.div`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    background-color: #23374d;
    padding: 25px 0;
`;

export function NasaCard(props) {

    return (
        <Container>
            <h1 className='title'>{props.title}</h1>
            <img src={props.image} alt={props.title}/>
            <Date 
            date={props.date}
            changeDate={props.changeDate}
            />
            <p className='text'>{props.explanation}</p>
        </Container>
    );
}