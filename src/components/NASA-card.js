import React from "react";
import {Date} from "./DateButton"

export function NasaCard(props) {

    return (
        <div className='container'>
            <h1 className='title'>{props.title}</h1>
            <img src={props.image} alt={props.title}/>
            <Date 
            date={props.date}
            changeDate={props.changeDate}
            />
            <p className='text'>{props.explanation}</p>
        </div>
    );
}