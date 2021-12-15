import React from "react";
import "../index.css"

const DataInput = ({year, month, date, setYear, setMonth, setDate}) => {
    const handleChange = (e, setState) => {
        setState(e.target.value);
    };

    const makeDateToday = () => {
        const now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth() + 1);
        setDate(now.getDate());
    }

    return (
    <div id="dateInput">
        <button onClick={makeDateToday}>오늘</button>
        <div>
            <input type="text" value={year} onChange={(e) => handleChange(e,setYear)} />년 
            <input type="text" value={month} onChange={(e) => handleChange(e,setMonth)} />월
            <input type="text" value={date} onChange={(e) => handleChange(e,setDate)} />일을 기준으로
        </div>
    </div>
    );
};

export default DataInput;