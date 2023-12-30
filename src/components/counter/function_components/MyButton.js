import React from "react";

const MyButton = (props) => {
    let className = "";
    switch (props.color) {
        case 'yellow':
            className = 'btn btn--yellow';
            break;
        case 'blue':
            className = 'btn btn--blue';
            break;
        case 'red':
            className = 'btn btn--red';
            break;
        default:
            className = 'btn';
    }
    let onClick = props.onClick;
    let text = props.text;
    return (
        <>
            <button className={className} onClick={onClick}>{text}</button>
        </>
    );
}

export default MyButton;