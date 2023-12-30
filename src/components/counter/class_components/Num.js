import React from "react";
import './Num.scss';
import MyButton from "./MyButton.js";

class Num extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: Number(this.props.start),
            isPlaying: false,
        };

        this.timerID = -1;

        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.change = this.change.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    };

    componentDidMount() {
        if (this.props.autoplay) {
            this.timerID = setInterval(
                () => this.up(),
                1000
            );
        }
    };

    componentDidUpdate(preProps, preState) {
        if (this.props.start !== preProps.start) {
            this.setState({
                value: this.props.start
            });
        } else if (this.state.value === this.props.end && this.state.isPlaying) {
            clearInterval(this.timerID)
            this.setState({
                isPlaying: !this.state.isPlaying
            });
        };
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    down() {
        this.setState({
            value: this.state.value - 1
        });
    };

    up() {
        this.setState({
            value: this.state.value + 1
        });
    };

    change(k) {
        this.setState({
            value: this.state.value + k
        });
    };

    play() {
        this.timerID = setInterval(
            () => this.up(),
            1000
        );
        this.setState((state) => ({
            isPlaying: !state.isPlaying
        }));
    }

    pause() {
        clearInterval(this.timerID);
        this.setState((state) => ({
            isPlaying: !state.isPlaying
        }));
    };

    stop() {
        clearInterval(this.timerID);
        this.setState({
            value: this.props.start,
            isPlaying: false,
        });
    };

    render() {
        return (
            <>
                <div style={{ fontWeight: 'bold' }}>
                    <span className={'btn-change'} onClick={() => this.change(-1)}>&lt;</span>
                    <span>{this.state.value}</span>
                    <span className={'btn-change'} onClick={() => this.change(1)}>&gt;</span>
                </div>
                {
                    this.state.isPlaying
                        ? <MyButton color="yellow" onClick={this.pause} text='Pause' />
                        : <MyButton color="blue" onClick={this.play} text='Play' />
                }
                <MyButton color="red" onClick={this.stop} text='Stop' />
            </>
        );
    };

};

export default Num;