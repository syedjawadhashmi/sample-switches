import React, { Component } from "react";
import Switch from "react-switch";
import "./styles.css";

class Focus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checkedAnalogue: false,
            checkedAlien: false,
        };
    }
    handleChange = (type, checked) => {
        this.setState({ [type]: checked });
    }
    render() {
        return (
            <div className="focus-container" >
                <div className={'mode'}>Focus</div>
                <div className="focus-outer-container">
                    <div className={'switchDiv'}>
                        <div className={'onBar'} style={{ backgroundColor: this.state.checked ? '#a8b911' : '#111111' }} />
                        <div className={'switch'}>
                            <Switch
                                onChange={(event) => this.handleChange('checked', event)}
                                checked={this.state.checked}
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
                        <div className={'onBar'} style={{ backgroundColor: !this.state.checked ? '#f0ac3f' : '#111111' }} />
                        <div className={'focus-title'}>WEB</div>
                    </div>
                    <div className={'switchDiv'}>
                        <div className={'onBar'} style={{ backgroundColor: this.state.checkedAnalogue ? '#a8b911' : '#111111' }} />
                        <div className={'switch'}>
                            <Switch
                                onChange={(event) => this.handleChange('checkedAnalogue', event)}
                                checked={this.state.checkedAnalogue}
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
                        <div className={'onBar'} style={{ backgroundColor: !this.state.checkedAnalogue ? '#f0ac3f' : '#111111' }} />
                        <div className={'focus-title'}>PRINT</div>
                    </div>
                    <div className={'switchDiv'}>
                        <div className={'onBar'} style={{ backgroundColor: this.state.checkedAlien ? '#a8b911' : '#111111' }} />
                        <div className={'switch'}>
                            <Switch
                                onChange={(event) => this.handleChange('checkedAlien', event)}
                                checked={this.state.checkedAlien}
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
                        <div className={'onBar'} style={{ backgroundColor: !this.state.checkedAlien ? '#f0ac3f' : '#111111' }} />
                        <div className={'focus-title'}>PRODUCT</div>
                    </div>
                </div>
            </div >
        );
    };
};


export default Focus;
