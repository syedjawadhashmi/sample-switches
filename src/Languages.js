import React, { useState } from "react";
import { Range } from 'react-range';
import "./styles.css";


const Languages = ({ }) => {
    const [state, setState] = useState({
        value: [5],
        EN: [],
        DE: [],
        RU: [],
        language: 'en'
    })

    const pushinArray = () => {
        if (state.language === 'en') {

            for (var i = 0; i < state.value[0]; i++) {
                if (i > state.EN.length) {
                    setState(prevState => ({
                        ...prevState,
                        EN: [...prevState.EN, i]
                    }))
                } else {
                    state.EN.pop()
                    setState(prevState => ({
                        ...prevState,
                        EN: state.EN
                    }))
                }
            }
        }
        else if (state.language === 'de') {

            for (var i = 0; i < state.value[0]; i++) {
                if (i > state.DE.length) {
                    setState(prevState => ({
                        ...prevState,
                        DE: [...prevState.DE, i]
                    }))
                } else {
                    state.DE.pop()
                    setState(prevState => ({
                        ...prevState,
                        DE: state.DE
                    }))
                }
            }
        }
        else if (state.language === 'ru') {

            for (var i = 0; i < state.value[0]; i++) {
                if (i > state.RU.length) {
                    setState(prevState => ({
                        ...prevState,
                        RU: [...prevState.RU, i]
                    }))
                } else {
                    state.RU.pop()
                    setState(prevState => ({
                        ...prevState,
                        RU: state.RU
                    }))
                }
            }
        }
    }

    const selectLanguage = (language) => {
        setState(prevState => ({
            ...prevState,
            language: language
        }))
    }
    return (
        <div className={'languagesBox'}>
            <div className={'languagesBlackBox'}>
                <div className={'languagesBlackBoxInner'}>
                    <div className={'enDiv'}>
                        {
                            state.RU && state.RU.map((item, index) => {
                                return (
                                    <div className={'languageLine'} style={{ backgroundColor: '#f0ac3f' }} />
                                )
                            })
                        }
                    </div>
                    <div className={'enDiv'}>
                        {
                            state.DE && state.DE.map((item, index) => {
                                return (
                                    <div className={'languageLine'} style={{ backgroundColor: '#17939f' }} />
                                )
                            })
                        }
                    </div>
                    <div className={'enDiv'}>
                        {
                            state.EN && state.EN.map((item, index) => {
                                return (
                                    <div className={'languageLine'} style={{ backgroundColor: '#a8b911' }} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={'languageTextdiv'}>
                <div style={{ fontWeight: state.language === "en" ? 'bold' : 'normal' }} onClick={() => selectLanguage("en")} className={"languageText"}>EN</div>
                <div style={{ fontWeight: state.language === "de" ? 'bold' : 'normal' }} onClick={() => selectLanguage("de")} className={"languageText"}>DE</div>
                <div style={{ fontWeight: state.language === "ru" ? 'bold' : 'normal' }} onClick={() => selectLanguage("ru")} className={"languageText"}>RU</div>
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
                max={35}
                direction={'to right'}
                values={state.value}
                onChange={(value) => {
                    setState(prevState => ({ ...prevState, value: value }))
                    pushinArray()
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


export default Languages;
