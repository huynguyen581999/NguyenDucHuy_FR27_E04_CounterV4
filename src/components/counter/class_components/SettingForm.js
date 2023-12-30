import React from "react";
import './SettingForm.scss';

class SettingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: 100,
            errorMessage: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: Number(value)
        });
    }

    handleSubmit() {
        if (this.state.start > this.state.end) {
            this.setState({
                errorMessage: 'Bạn cần nhập số bắt đầu nhỏ hơn hoặc bằng số kết thúc',
            });
        }
        else {
            this.setState({
                errorMessage: ''
            });
            this.props.settingsReciever(this.state.start, this.state.end);
        };
    };

    render() {
        return (
            <form>
                <fieldset>
                    <legend>Thiết lập</legend>
                    <div className="container">
                        <label>
                            Số bắt đầu
                            <input
                                name="start"
                                type="number"
                                value={this.state.start}
                                size="15"
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </label>

                        <label>
                            <input
                                name="end"
                                type="number"
                                value={this.state.end}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                            Số kết thúc
                        </label>

                    </div>
                    {
                        this.state.errorMessage &&
                        <p className="error-message">{this.state.errorMessage}</p>
                    }
                    <input type="button" value="Áp dụng" onClick={this.handleSubmit} />
                </fieldset>
            </form>
        )
    };

};

export default SettingForm;