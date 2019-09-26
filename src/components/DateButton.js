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
            <button onClick={props.changeDate} value={oneDay}>{oneDay}</button>
            <button onClick={props.changeDate} value={twoDays}>{twoDays}</button>        
            <button onClick={props.changeDate} value={threeDays}>{threeDays}</button>
            <button onClick={props.changeDate} value={fourDays}>{fourDays}</button>
            <button onClick={props.changeDate} value={fiveDays}>{fiveDays}</button>
            <button onClick={props.changeDate} value={sixDays}>{sixDays}</button>
            <button onClick={props.changeDate} value={sevenDays}>{sevenDays}</button>     
        </div>
</div>
)}