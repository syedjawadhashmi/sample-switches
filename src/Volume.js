import React, { useState } from "react";
import { Range } from 'react-range';
import "./styles.css";

const Volume = ({ }) => {
    const [state, setState] = useState({
        value: [5]
    })
    return (
        <div className={'volumeBox'}>
            <div className={"barBox"}>
                <div className={"fullBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"fullBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"fullBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"fullBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"fullBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"fullBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"halfBar"} />
                <div className={"fullBar"} />
            </div>
            <div className={'lineBox'}>
                <div className={'line'} />
                <div className={'squareboxDiv'}>
                    <div className={'squarebox'} />
                    <div className={'squarebox'} />
                    <div className={'squarebox'} />
                </div>
            </div>
            <Range
                step={0.1}
                min={0}
                max={100}
                direction={'to top'}
                values={state.value}
                onChange={(value) => setState(prevState => ({ ...prevState, value: value }))}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '300px',
                            marginTop: 15,
                            marginLeft: -44,
                            width: '100%',
                            backgroundColor: 'transparent'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className={'controller'}
                    >
                        <div className={"horizontalLine"} style={{ width: 35 }} />
                        <div className={"horizontalLine"} style={{ width: 37 }} />
                        <div className={"horizontalLine"} style={{ width: 39 }} />
                        <div className={"horizontalLinebold"} />
                        <div className={"horizontalLine"} style={{ width: 39 }} />
                        <div className={"horizontalLine"} style={{ width: 37 }} />
                        <div className={"horizontalLine"} style={{ width: 35 }} />
                    </div>
                )}
            />
        </div>
    );
};


export default Volume;
