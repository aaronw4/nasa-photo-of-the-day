import React from "react";

export function NasaCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src = {props.url} alt='NASA'/>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div>
    );
}