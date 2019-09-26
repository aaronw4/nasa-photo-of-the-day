import React, {useState, useEffect} from "react";
import axios from "axios";
import {NasaCard} from './NASA-card'
import moment from "moment";

export function NasaList() {
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

    function changeDate(day) {
        let digit = day.target.value;
        setDate(digit);
    }

useEffect(() => {
    async function fetchData() {
        try {
            const nasaData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=C8iZhiozIUVg3WRcic20xpp11Z2q9TtkPfWk1aB9&date=${date}`);
            console.log(nasaData);
            setPhoto(nasaData.data);          
        }
        catch(err) {
            console.log(err);
        }
    }
    fetchData();
}, [date]);

return (
    <div>
        <NasaCard
                    title={photo.title}
                    image={photo.url}
                    date={date}
                    explanation={photo.explanation}
                    changeDate={changeDate}
        />        
    </div>
);
}
