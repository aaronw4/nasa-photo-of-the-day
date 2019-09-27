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

const Title = styled.h1`
    color: white;
`;

const Text = styled.p`
    color: white;
    padding: 0 25px;
    font-size: 20px;
`;

export function NasaCard(props) {

    return (
        <Container>
            <Title>{props.title}</Title>
            <img src={props.image} alt={props.title}/>
            <Date 
            date={props.date}
            changeDate={props.changeDate}
            />
            <Text>{props.explanation}</Text>
        </Container>
    );
}