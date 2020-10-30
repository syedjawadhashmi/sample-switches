import React, { Component } from "react";
import {
    CircularGaugeComponent,
    AxesDirective,
    AxisDirective,
    Inject,
    AnnotationsDirective,
    AnnotationDirective,
    PointersDirective,
    PointerDirective,
    RangesDirective,
    RangeDirective,
    Annotations
} from "@syncfusion/ej2-react-circulargauge";

export default class Drag extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: 0
        }
        // this.content =
        //     '<div style="font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;"><span>';
    }
    dragChange = () => {
        let pointerValue = +this.drag.value;
        document.getElementById("pointerValue").innerHTML =
            "Pointer Value <span> &nbsp;&nbsp;&nbsp;" + Math.round(pointerValue);
        this.setPointersValue(this.gauge, pointerValue);
    }
    pointerDragChange = () => {
        let value = this.pointerDrag.checked;
        this.gauge.enablePointerDrag = value;
    }
    rangesDragChange = () => {
        let value = this.rangesDrag.checked;
        this.gauge.enableRangeDrag = value;
    }
    setPointersValue = (circulargauge, pointerValue) => {
        let color;
        if (pointerValue >= 0 && pointerValue <= 40) {
            color = "#fff";
        } else if (pointerValue >= 40 && pointerValue <= 100) {
            color = "#fff";
        } else {
            color = "#fff";
        }
    }
    render() {
        return (
            <div className="control-pane">
                <CircularGaugeComponent
                    width='150' height='150'
                    load={this.load}
                    style={{ height: "250px" }}
                    loaded={this.onChartLoad}
                    dragMove={this.dragMove}
                    className={'control-section'}
                    dragEnd={this.dragEnd}
                    id="drag-container"
                    ref={gauge => (this.gauge = gauge)}
                    enablePointerDrag={true}
                >
                    <img style={{ width: '80px', height: '80px', zIndex: -2, marginBottom: -115, transform: `rotate(${this.state.value}deg)`, }} src={require('./assets/images/round-g.png')} />
                    <AxesDirective >
                        <AxisDirective labelStyle={{
                            font: {
                                color: 'transparent',
                                size: '2px',
                                fontWeight: 'Bold'
                            }
                        }}>
                            <PointersDirective>
                                <PointerDirective
                                    style={{ position: 'inherit' }}
                                    value={this.state.value}
                                    pointerWidth={5}
                                    needleStartWidth={5} needleEndWidth={5} radius='80%' color='#fff' cap={{
                                        radius: 1,
                                        color: '#fff',
                                        border: {
                                            color: '#a8b911',
                                            width: 10
                                        },
                                    }} needleTail={{
                                        length: '10%',
                                    }}
                                >
                                </PointerDirective>
                            </PointersDirective>
                        </AxisDirective>
                    </AxesDirective>
                </CircularGaugeComponent>
            </div>
        );
    }

    onChartLoad = (args) => {
        document.getElementById("drag-container").setAttribute("title", "");
    }

    dragMove = (args) => {
        this.setState({ value: Math.round(args.currentValue) })
    }

    dragEnd = (args) => {
        if (isNaN(args.rangeIndex)) {
            this.setPointersValue(this.gauge, Math.round(args.currentValue));
        }
    }
}

