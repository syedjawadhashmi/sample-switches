import React, { Component } from "react";
import { Range } from 'react-range';
import "./styles.css";


class Languages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [0],
            EN: [],
            DE: [],
            RU: [],
            language: 'en'
        };
    }

    pushinArray = () => {
        if (this.state.language === 'en') {

            for (var i = 0; i < this.state.value[0]; i++) {
                if (i > this.state.EN.length) {
                    this.setState(prevState => ({
                        ...prevState,
                        EN: [...prevState.EN, i]
                    }))
                } else {
                    this.state.EN.pop()
                    this.setState(prevState => ({
                        ...prevState,
                        EN: this.state.EN
                    }))
                }
            }
        }
        else if (this.state.language === 'de') {

            for (var i = 0; i < this.state.value[0]; i++) {
                if (i > this.state.DE.length) {
                    this.setState(prevState => ({
                        ...prevState,
                        DE: [...prevState.DE, i]
                    }))
                } else {
                    this.state.DE.pop()
                    this.setState(prevState => ({
                        ...prevState,
                        DE: this.state.DE
                    }))
                }
            }
        }
        else if (this.state.language === 'ru') {

            for (var i = 0; i < this.state.value[0]; i++) {
                if (i > this.state.RU.length) {
                    this.setState(prevState => ({
                        ...prevState,
                        RU: [...prevState.RU, i]
                    }))
                } else {
                    this.state.RU.pop()
                    this.setState(prevState => ({
                        ...prevState,
                        RU: this.state.RU
                    }))
                }
            }
        }
    }

    selectLanguage = (language) => {
        this.setState({
            language: language
        })
    }
    render() {
        return (
            <div className={'languagesBox'}>
                <div className={'languagesBlackBox'}>
                    <div className={'languagesBlackBoxInner'}>
                        <div className={'enDiv'}>
                            {
                                this.state.RU && this.state.RU.map((item, index) => {
                                    return (
                                        <div className={'languageLine'} style={{ backgroundColor: '#f0ac3f' }} />
                                    )
                                })
                            }
                        </div>
                        <div className={'enDiv'}>
                            {
                                this.state.DE && this.state.DE.map((item, index) => {
                                    return (
                                        <div className={'languageLine'} style={{ backgroundColor: '#17939f' }} />
                                    )
                                })
                            }
                        </div>
                        <div className={'enDiv'}>
                            {
                                this.state.EN && this.state.EN.map((item, index) => {
                                    return (
                                        <div className={'languageLine'} style={{ backgroundColor: '#a8b911' }} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={'languageTextdiv'}>
                    <div style={{ fontWeight: this.state.language === "en" ? 'bold' : 'normal' }} onClick={() => this.selectLanguage("en")} className={"languageText"}>EN</div>
                    <div style={{ fontWeight: this.state.language === "de" ? 'bold' : 'normal' }} onClick={() => this.selectLanguage("de")} className={"languageText"}>DE</div>
                    <div style={{ fontWeight: this.state.language === "ru" ? 'bold' : 'normal' }} onClick={() => this.selectLanguage("ru")} className={"languageText"}>RU</div>
                </div>
                <div className={"languagesBarBox"}>
                    <div className={"languagesFullBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesFullBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesHalfBar"} />
                    <div className={"languagesFullBar"} />
                </div>
                <div className={'languagesLineBox'}>
                    <div className={'languagesLine'} />
                    <div className={'languagesSquareboxDiv'}>
                        <div className={'languagesSquarebox'} />
                        <div className={'languagesSquarebox'} />
                        <div className={'languagesSquarebox'} />
                    </div>
                </div>
                <Range
                    step={1}
                    min={0}
                    max={38}
                    direction={'to right'}
                    values={this.state.value}
                    onChange={(value) => {
                        this.props.modeChange(false)
                        this.setState({ value: value })
                        this.pushinArray()
                    }}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '30px',
                                marginLeft: -10,
                                marginTop: -25,
                                width: 220,
                                backgroundColor: 'transparent'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            className={'languagesController'}
                        >
                            <div className={"languagesHorizontalLine"} style={{ height: 37 }} />
                            <div className={"languagesHorizontalLine"} style={{ height: 39 }} />
                            <div className={"languagesHorizontalLinebold"} />
                            <div className={"languagesHorizontalLine"} style={{ height: 39 }} />
                            <div className={"languagesHorizontalLine"} style={{ height: 37 }} />
                        </div>
                    )}
                />
            </div>
        );
    };
};


export default Languages;
