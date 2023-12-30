import React, { useState } from "react";
import './Counter.scss';
import Num from "./Num";
import SettingForm from "./SettingForm";

const Counter = (props) => {


    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(100);
    let name = 'Huy Nguyen';

    const hello = () => {
        alert('Xin chào ' + name);
    };

    const goodbye = (str) => {
        alert(str + ' ' + name);
    };

    const updateSettings = (start, end) => {
        setStart(start);
        setEnd(end);
    };
    return (
        <div className="counter">
            <h2 style={{ color: 'var(--red)', fontSize: '1.2em' }}>{props.heading}</h2>
            <SettingForm settingsReciever={updateSettings} />
            <Num start={start} end={end} />
            <div className="counter__actions">
                <button className="btn btn--yellow" onClick={hello}>Xin chào</button>
                <button className="btn btn--blue" onClick={() => goodbye('Tạm biệt')}>Tạm biệt</button>
            </div>
        </div >
    );
};


export default Counter;