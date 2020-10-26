import React, { useState,useEffect } from "react";
import cn from "classnames";
import "./styles.css";

const Mode = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const halfwayIndex = Math.ceil(data.length / 2);

    const itemHeight = 52;

    const shuffleThreshold = halfwayIndex * itemHeight;

    const visibleStyleThreshold = shuffleThreshold / 2;

    const determinePlacement = (itemIndex) => {
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(data.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };

    const handleClick = (direction) => {
        setActiveIndex((prevIndex) => {
            if (direction === "next") {
                if (prevIndex + 1 > data.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            }

            if (prevIndex - 1 < 0) {
                return data.length - 1;
            }

            return prevIndex - 1;
        });
    };


    const handleKeyDown = React.useCallback(event => {
        const { key } = event
        if (key === 'ArrowDown') {
            handleClick('next')
        }
    }, [])

    const handleKeyUp = React.useCallback(event => {
        const { key } = event
        if (key === 'ArrowUp') {
            handleClick('prev')
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [handleKeyDown, handleKeyUp]);

    return (
        <section className="outer-container">
            <div className="carousel-wrapper">
                <div className="carousel">
                    <div className="slides">

                        <div className="carousel-inner">
                            {data.map((item, i) => (
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(i)}
                                    className={cn("carousel-item", {
                                        active: activeIndex === i,
                                        visible:
                                            Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                                    })}
                                    key={item.id}
                                    style={{
                                        transform: `translateY(${determinePlacement(i)}px)`,
                                        marginTop:determinePlacement(i) === 52 ? -20: determinePlacement(i) === -52 ? 0 : -10
                                    }}
                                >
                                    <span className={"text"}>
                                        {item.introline.toUpperCase()}
                                    </span>
                                    <div className={determinePlacement(i) === 52 ? "horizontalLineTextDown" : determinePlacement(i) === -52 ? "horizontalLineTextUp" : "horizontalLineText"} />
                                    <div className={determinePlacement(i) === 52 ? "horizontalLineDown" : determinePlacement(i) === -52 ? "horizontalLineUp" : "horizontalLine"} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Mode;
