import React from 'react';
import moment from "moment";

export function Date(props) {
    let oneDay = moment(props.date).subtract(1, 'days').format('YYYY-MM-DD');
    let twoDays = moment(props.date).subtract(2, 'days').format('YYYY-MM-DD');
    let threeDays = moment(props.date).subtract(3, 'days').format('YYYY-MM-DD');
    let fourDays = moment(props.date).subtract(4, 'days').format('YYYY-MM-DD');
    let fiveDays = moment(props.date).subtract(5, 'days').format('YYYY-MM-DD');
    let sixDays = moment(props.date).subtract(6, 'days').format('YYYY-MM-DD');
    let sevenDays = moment(props.date).subtract(7, 'days').format('YYYY-MM-DD');

return(
<div className="dropdown">
    <button className="dropbtn text">{props.date}</button>
        <div className="dropdown-content">
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