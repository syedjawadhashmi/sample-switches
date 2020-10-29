import React, { Component } from "react";
import { Range } from 'react-range';
import "./styles.css";

class Volume extends Component {
    constructor(props) {
        super(props);
        this.state = { value: [5] };
    }

    render() {
        return (
            <div className={'volumeContainer'}>
                <div className={'volumeBox'}>
                    <div className={"barBox"}>
                        <div className={"fullBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"fullBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"fullBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"fullBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"fullBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"halfBar"} />
                        <div className={"fullBar"} />
                        <div className={"halfBar"} />
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
                        step={1}
                        min={0}
                        max={100}
                        direction={'to top'}
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
                                    height: '400px',
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
                <div className={'volumeText'}>
                    {this.state.value[0]}
                </div>
            </div>
        );
    }
};


export default Volume;
