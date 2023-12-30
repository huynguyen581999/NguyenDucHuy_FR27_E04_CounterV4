import React, { useEffect, useState } from "react";
import './Num.scss';
import MyButton from "./MyButton.js";

const Num = (props) => {

    const [value, setValue] = useState(Number(props.start));
    const [isPlaying, setisPlaying] = useState(false);
    const [timerID, settimerID] = useState(null);
    const [end, setEnd] = useState(Number(props.end));

    useEffect(() => {
        if (props.autoplay) {
            play();
        }
    }, [props.autoplay]);

    useEffect(() => {
        if (value !== props.start || end !== props.end) {
            setValue(props.start);
            setEnd(props.end);
        };
    }, [props.start, props.end]);

    useEffect(() => {
        if (value === props.end && isPlaying === true) {
            clearInterval(timerID);
            setisPlaying(!isPlaying);
        }
    }, [value]);

    const down = () => {
        setValue(value - 1);
    };

    const up = () => {
        setValue((preValue) => preValue + 1);
    }

    const change = (k) => {
        setValue((prevValue) => {
            const newValue = prevValue + k;
            if (newValue >= props.start && newValue <= end) {
                return newValue;
            }
            return prevValue;
        });
    }

    const play = () => {
        if (value < props.end) {
            const timerID = setInterval(
                () => up()
                , 1000);
            setisPlaying(!isPlaying);
            settimerID(timerID);
        }
        else {
            clearInterval(timerID);
        }
    };

    const pause = () => {
        clearInterval(timerID);
        setisPlaying(!isPlaying);
    };

    const stop = () => {
        clearInterval(timerID);
        settimerID(null);
        setValue(props.start);
        setisPlaying(false);
    };

    return (
        <>
            <div style={{ fontWeight: 'bold' }}>
                <span className={'btn-change'} onClick={() => change(-1)}>&lt;</span>
                <span>{value}</span>
                <span className={'btn-change'} onClick={() => change(1)}>&gt;</span>
            </div>
            {
                isPlaying
                    ? <MyButton color="yellow" onClick={pause} text='Pause' />
                    : <MyButton color="blue" onClick={play} text='Play' />
            }
            <MyButton color="red" onClick={stop} text='Stop' />
        </>
    );
};
export default Num;