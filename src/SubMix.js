import React, { Component } from "react";
import { Range } from 'react-range';
import "./styles.css";

class SubMix extends Component {
    constructor(props) {
        super(props);
        this.state = { value: [2] };
    }
    render() {
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
                    values={this.state.value}
                    onChange={(value) => {
                        this.props.modeChange(false)
                        this.setState({ value: value })
                    }}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '50px',
                                width: '270px',
                                marginLeft: -290,
                                backgroundColor: 'transparent'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{ backgroundColor: 'yellowgreen' }}
                            className={'submixController'}
                        >
                            <b>PE</b>
                        </div>
                    )}
                />
            </div>
        );
    }
};


export default SubMix;
