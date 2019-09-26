import React from "react";

export function NasaCard(props) {

    return (
        <div className='container'>
            <h1 className='title'>{props.title}</h1>
            <img src={props.image} alt={props.title}/>
            <p className='text'>{props.date}</p>
            <p className='text'>{props.explanation}</p>
        </div>
    );
}