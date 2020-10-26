import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import "./styles.css";

const Focus = ({ data }) => {
    const [state, setState] = useState({
        checked: false,
        checkedAnalogue: false,
        checkedAlien: false,
    })

    const handleChange = (type, checked) => {
        setState(prevState => ({ ...prevState, [type]: checked }));
    }

    return (
        <div className="focus-container">
            <div className={'mode'}>Focus</div>
            <div className="focus-outer-container">
                <div className={'switchDiv'}>
                    <div className={'onBar'} style={{ backgroundColor: state.checked ? '#a8b911' : '#111111' }} />
                    <div className={'switch'}>
                        <Switch
                            onChange={(event) => handleChange('checked', event)}
                            checked={state.checked}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onColor={"#111111"}
                            offColor={"#111111"}
                            width={60}
                            height={10}
                            handleDiameter={25}
                            onHandleColor={'#636363'}
                            offHandleColor={'#636363'}
                        />
                    </div>
                    <div className={'onBar'} style={{ backgroundColor: !state.checked ? '#f0ac3f' : '#111111' }} />
                    <div className={'focus-title'}>WEB</div>
                </div>
                <div className={'switchDiv'}>
                    <div className={'onBar'} style={{ backgroundColor: state.checkedAnalogue ? '#a8b911' : '#111111' }} />
                    <div className={'switch'}>
                        <Switch
                            onChange={(event) => handleChange('checkedAnalogue', event)}
                            checked={state.checkedAnalogue}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onColor={"#111111"}
                            offColor={"#111111"}
                            width={60}
                            height={10}
                            handleDiameter={25}
                            onHandleColor={'#636363'}
                            offHandleColor={'#636363'}
                        />
                    </div>
                    <div className={'onBar'} style={{ backgroundColor: !state.checkedAnalogue ? '#f0ac3f' : '#111111' }} />
                    <div className={'focus-title'}>PRINT</div>
                </div>
                <div className={'switchDiv'}>
                    <div className={'onBar'} style={{ backgroundColor: state.checkedAlien ? '#a8b911' : '#111111' }} />
                    <div className={'switch'}>
                        <Switch
                            onChange={(event) => handleChange('checkedAlien', event)}
                            checked={state.checkedAlien}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onColor={"#111111"}
                            offColor={"#111111"}
                            width={60}
                            height={10}
                            handleDiameter={25}
                            onHandleColor={'#636363'}
                            offHandleColor={'#636363'}
                        />
                    </div>
                    <div className={'onBar'} style={{ backgroundColor: !state.checkedAlien ? '#f0ac3f' : '#111111' }} />
                    <div className={'focus-title'}>PRODUCT</div>
                </div>
            </div>
        </div>
    );
};


export default Focus;
