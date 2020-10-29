import React, { Component } from "react";
import cn from "classnames";
import "./styles.css";

class Mode extends Component {
    halfwayIndex = Math.ceil(this.props.data.length / 2);

    itemHeight = 52;

    shuffleThreshold = this.halfwayIndex * this.itemHeight;

    visibleStyleThreshold = this.shuffleThreshold / 2;
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    determinePlacement = (itemIndex) => {
        const { activeIndex } = this.state
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= this.halfwayIndex) {
            if (activeIndex > itemIndex - this.halfwayIndex) {
                return (itemIndex - activeIndex) * this.itemHeight;
            } else {
                return -(this.props.data.length + activeIndex - itemIndex) * this.itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * this.itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * this.itemHeight >= this.shuffleThreshold) {
                return (this.props.data.length - (activeIndex - itemIndex)) * this.itemHeight;
            }
            return -(activeIndex - itemIndex) * this.itemHeight;
        }
    };

    handleClick = (direction) => {
        if (direction === "next") {
            if (this.state.activeIndex + 1 > this.props.data.length - 1) {
                this.setState({
                    activeIndex: 0
                })
                return
            }
            this.setState({
                activeIndex: this.state.activeIndex + 1
            })
            return
        }

        if (this.state.activeIndex - 1 < 0) {
            this.setState({

                activeIndex: this.props.data.length - 1
            })
            return
        }
        this.setState({
            activeIndex: this.state.activeIndex - 1
        })
    };


    handleKeyDown = (event) => {
        const { key } = event
        if (key === 'ArrowDown' && this.props.mode) {
            this.handleClick('next')
        }
    }

    handleKeyUp = (event) => {
        const { key } = event
        if (key === 'ArrowUp' && this.props.mode) {
            this.handleClick('prev')
        }
    }


    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
        document.addEventListener('keyup', this.handleKeyUp)
    }

    setActiveIndexValue = (i) => {
        this.setState({ activeIndex: i })
        this.props.modeChange(true)
    }

    render() {

        const { data } = this.props
        console.log('activeIndex', this.state.activeIndex)
        return (
            <div className="outer-container">
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="slides">

                            <div className="carousel-inner">
                                {data.map((item, i) => (
                                    <button
                                        type="button"
                                        onClick={() => this.setActiveIndexValue(i)}
                                        className={cn("carousel-item", {
                                            active: this.state.activeIndex === i,
                                            visible:
                                                Math.abs(this.determinePlacement(i)) <= this.visibleStyleThreshold
                                        })}
                                        key={item.id}
                                        style={{
                                            transform: `translateY(${this.determinePlacement(i)}px)`,
                                            marginTop: this.determinePlacement(i) === 52 ? -20 : this.determinePlacement(i) === -52 ? 0 : -10
                                        }}
                                    >
                                        <div className={this.determinePlacement(i) === -52 ? "horizontalLineUpUpper" : ""} />
                                        <span className={this.determinePlacement(i) === 52 ? "downText" : this.determinePlacement(i) === -52 ? "upText" : "text"}>
                                            {item.introline.toUpperCase()}
                                        </span>
                                        <div className={this.determinePlacement(i) === 52 ? "horizontalLineTextDown" : this.determinePlacement(i) === -52 ? "horizontalLineTextUp" : "horizontalLineText"} />
                                        <div className={this.determinePlacement(i) === 52 ? "horizontalLineDown" : this.determinePlacement(i) === -52 ? "horizontalLineUp" : "horizontalLine"} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};


export default Mode;
