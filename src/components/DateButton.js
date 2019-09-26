import React from 'react';
import moment from "moment";

export function Date(props) {
    let oneDay = moment(props.date).subtract(1, 'days').calendar('YYYY-MM-DD');
    let twoDays = moment(props.date).subtract(2, 'days').calendar('YYYY-MM-DD');
    let threeDays = moment(props.date).subtract(3, 'days').calendar('YYYY-MM-DD');
    let fourDays = moment(props.date).subtract(4, 'days').calendar('YYYY-MM-DD');
    let fiveDays = moment(props.date).subtract(5, 'days').calendar('YYYY-MM-DD');
    let sixDays = moment(props.date).subtract(6, 'days').calendar('YYYY-MM-DD');
    let sevenDays = moment(props.date).subtract(7, 'days').calendar('YYYY-MM-DD');

    console.log(oneDay)

return(
<div class="dropdown">
    <button class="dropbtn text">{props.date}</button>
        <div class="dropdown-content">
            <button>{oneDay}</button>
            <button>{twoDays}</button>        
            <button>{threeDays}</button>
            <button>{fourDays}</button>
            <button>{fiveDays}</button>
            <button>{sixDays}</button>
            <button>{sevenDays}</button>     
        </div>
</div>
)}