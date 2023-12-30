import React, { useState } from "react";
import './SettingForm.scss';


const SettingForm = (props) => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(100);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'start':
                setStart(Number(value));
                break;
            case 'end':
                setEnd(Number(value));
                break;
            case 'errorMessage':
                setErrorMessage(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = () => {
        if (start > end) {
            setErrorMessage('Bạn cần nhập số bắt đầu nhỏ hơn hoặc bằng số kết thúc');
        }
        else {
            setErrorMessage('');
            props.settingsReciever(start, end);
        };
    };

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
                            value={start}
                            size="15"
                            onChange={(event) => handleInputChange(event)}
                        />
                    </label>

                    <label>
                        <input
                            name="end"
                            type="number"
                            value={end}
                            onChange={(event) => handleInputChange(event)}
                        />
                        Số kết thúc
                    </label>

                </div>
                {
                    errorMessage &&
                    <p className="error-message">{errorMessage}</p>
                }
                <input type="button" value="Áp dụng" onClick={handleSubmit} />
            </fieldset>
        </form>
    )
};

export default SettingForm;