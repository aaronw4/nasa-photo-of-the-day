import React, {useState, useEffect} from "react";
import axios from "axios";
import {NasaCard} from './NASA-card'

export function NasaList() {
    const [photo, setPhoto] = useState([]);

useEffect(() => {
    async function fetchData() {
        try {
            const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=C8iZhiozIUVg3WRcic20xpp11Z2q9TtkPfWk1aB9');
            console.log(nasaData);
            setPhoto(nasaData.data);          
        }
        catch(err) {
            console.log(err);
        }
    }
    fetchData();
}, []);

return (
    <div>
        <NasaCard
                    title={photo.title}
                    image={photo.url}
                    date={photo.date}
                    explanation={photo.explanation}
        />        
    </div>
);
}
