import React from "react";
import './Counter.scss';
import Num from "./Num";
import SettingForm from "./SettingForm";

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            start: 0,
            end: 100,
        };

        this.name = 'Huy Nguyen';
        this.hello = this.hello.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
    };

    hello() {
        alert('Xin chào ' + this.name);
    };

    goodbye = (str) => {
        alert(str + ' ' + this.name);
    }

    updateSettings(start, end) {

        this.setState({
            start: start,
            end: end,
        });
    };
    render() {
        return (
            <div className="counter">
                <h2 style={{ color: 'var(--red)', fontSize: '1.2em' }}>{this.props.heading}</h2>
                <SettingForm settingsReciever={this.updateSettings} />
                <Num start={this.state.start} end={this.state.end} autoplay />
                <div className="counter__actions">
                    <button className="btn btn--yellow" onClick={this.hello}>Xin chào</button>
                    <button className="btn btn--blue" onClick={() => this.goodbye('Tạm biệt')}>Tạm biệt</button>
                </div>
            </div >
        );
    };
}

export default Counter;