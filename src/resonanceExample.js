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
                {/* <div className="control-section row"> */}
                {/* <div className="col-lg-9"> */}
                <div className={'round'}>
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
                        <AxesDirective>
                            <AxisDirective labelStyle={{
                                font: {
                                    color: 'transparent',
                                    size: '2px',
                                    fontWeight: 'Bold'
                                }
                            }}>
                                <PointersDirective>
                                    <PointerDirective

                                        value={70}
                                        // zIndex={20}
                                        pointerWidth={5}
                                        needleStartWidth={5} needleEndWidth={5} radius='80%' color='#fff' cap={{
                                            radius: 1,
                                            color: '#fff',
                                            border: {
                                                color:'#a8b911',
                                                width:10
                                            },
                                        }} needleTail={{
                                            length: '10%',
                                        }}
                                    >
                                    </PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                        {/* <Inject services={[Annotations]} /> */}
                        {/* <AxesDirective> */}
                        {/* <AxisDirective
                                    startAngle={210}
                                    endAngle={140}
                                    backgroundColor={'transparent'}
                                    radius="80%"
                                    minimum={0}
                                    style={{backgroundColor:'transparent'}}
                                    maximum={120}
                                    majorTicks={{
                                        useRangeColor: true
                                    }}
                                    lineStyle={{ width: 0, color: "#9E9E9E" }}
                                    minorTicks={{
                                        useRangeColor: true
                                    }}
                                    labelStyle={{
                                        useRangeColor: true
                                    }}
                                > */}
                        {/* <AnnotationsDirective>
                                        <AnnotationDirective
                                        content='<div style="font-size: 14px;color:transparent;font-weight: lighter;font-style: oblique;"><span>70 MPH</span></div>'
                                        angle={180}
                                        radius="45%"
                                        zIndex="1"
                                        />
                                    </AnnotationsDirective> */}
                        {/* <PointersDirective>
                                        <PointerDirective
                                        value={70}
                                        type="Marker"
                                        markerShape="InvertedTriangle"
                                        radius="110%"
                                        markerHeight={20}
                                        color="transparent"
                                        markerWidth={20}
                                        />
                                        <PointerDirective
                                        value={70}
                                        radius="60%"
                                        cap={{
                                            radius: 10,
                                            border: { width: 5, color: "#E5C31C" }
                                        }}
                                        needleTail={{
                                            length: "0%",
                                            color: "#E5C31C"
                                        }}
                                        color="#E5C31C"
                                        />
                                    </PointersDirective> */}
                        {/* <RangesDirective style={{backgroundColor:'transparent'}}>
                                        <RangeDirective
                                        start={0}
                                        end={40}
                                        radius="108%"
                                        color="#30B32D"
                                        startWidth={8}
                                        endWidth={8}
                                        />
                                        <RangeDirective
                                        start={40}
                                        end={100}
                                        radius="108%"
                                        color="#FFDD00"
                                        startWidth={8}
                                        endWidth={8}
                                        />
                                        <RangeDirective
                                        start={100}
                                        end={120}
                                        radius="108%"
                                        color="#F03E3E"
                                        startWidth={8}
                                        endWidth={8}
                                        />
                                    </RangesDirective> */}
                        {/* </AxisDirective> */}
                        {/* </AxesDirective> */}
                    </CircularGaugeComponent>
                </div>
                {/* </div>
                </div> */}
            </div>
        );
    }
    // Code for Property Panel
    onChartLoad = (args) => {
        document.getElementById("drag-container").setAttribute("title", "");
    }
    dragMove = (args) => {
        // document.getElementById("pointerValue").innerHTML =
        //     "Pointer Value <span> &nbsp;&nbsp;&nbsp;" + Math.round(args.currentValue);
        // this.drag.value = Math.round(args.currentValue).toString();
        // this.gauge.setAnnotationValue(
        //     0,
        //     0,
        //     this.content + Math.round(args.currentValue) + " MPH</span></div > "
        // );
    }
    dragEnd = (args) => {
        // this.setPointersValue(this.gauge, Math.round(args.currentValue));
        if (isNaN(args.rangeIndex)) {
            this.setPointersValue(this.gauge, Math.round(args.currentValue));
        }
    }
}

