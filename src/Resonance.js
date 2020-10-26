import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer"
import "./styles.css";

const Resonance = ({ }) => {
    const [state, setState] = useState({
        value: 2
    })
    const handleChange = value => {
        setState(prevState => ({ ...prevState, value: value }));
    };
    return (
        <div className={'resonanceBox'}>
            <div className={'mixer'}>
                <div className={'backRound'}>
                    <div className={'round'}>
                        <ReactSpeedometer
                            width={50}
                            currentValueText={''}
                            ringWidth={5}
                            height={50}
                            maxSegmentLabels={0}
                            segments={1}
                            value={50}
                            maxValue={100}
                            needleHeightRatio={1}
                            startColor={'transparent'}
                            endColor={'transparent'}
                            needleColor="#fff"
                            className={'resonanceBar'} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Resonance;
