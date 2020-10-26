import React, { useState } from "react";
import { Range } from 'react-range';
import "./styles.css";

const SubMix = ({ }) => {
    const [state, setState] = useState({
        value: [2]
    })
    return (
        <div className={'submixBox'}>
            <div className={"barBoxsubmix"}>
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"halfBarsubmix"} />
                <div className={"fullBarsubmix"} />
            </div>
            <Range
                step={0.1}
                min={0}
                max={5}
                direction={'to right'}
                values={state.value}
                onChange={(value) => setState(prevState => ({ ...prevState, value: value }))}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '50px',
                            width: '270px',
                            marginLeft:-290,
                            backgroundColor: 'transparent'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{backgroundColor:'yellowgreen'}}
                        className={'submixController'}
                    >
                        <b>PE</b>
                    </div>
                )}
            />
        </div>
    );
};


export default SubMix;
