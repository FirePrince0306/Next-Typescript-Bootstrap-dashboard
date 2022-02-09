import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const TripsChart = () => {
    function getOption() {
        return {
            grid: {
                left: "60px",
                top: "20px",
                bottom: "12%",
                width: "100%"
            },
            tooltip: {
                trigger: "axis",
            },
            xAxis: {
                type: 'category',
                nameLocation: 'middle',
                data: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'June',
                    'July',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    color: "#ffb94d",
                    data: [
                        30000, 110000, 60000, 80000, 70000, 90000, 85000, 100000, 115000, 40000, 45000, 70000
                    ],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: 'rgba(255, 185, 77, .2)'
                          },
                          {
                            offset: 1,
                            color: 'rgba(255, 185, 77, .1)'
                          }
                        ])
                    },
                },
                {
                    color: "#0d8a72",
                    data: [
                        60000, 75000, 120000, 60000, 80000, 70000, 49000, 90000, 100000, 30000, 40000, 50000
                    ],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: 'rgba(13, 138, 114, .2)'
                          },
                          {
                            offset: 1,
                            color: 'rgba(13, 138, 114, .1)'
                          }
                        ])
                    },
                },
                {
                    color: "#ef6454",
                    data: [
                        10000, 50000, 30000, 32000, 40000, 80000, 25000, 60000, 25000, 20000, 30000, 38000
                    ],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: 'rgba(239, 100, 84, .2)'
                          },
                          {
                            offset: 1,
                            color: 'rgba(239, 100, 84, .1)'
                          }
                        ])
                    },
                }
            ]
        };
    }

    return (
        <>
            <div className="p-3 d-md-flex justify-content-between">
                <h6 className="heading text-basic mb-3 mb-md-0">Trips Performance</h6>
                <div>
                    <button className="button appearance-filled size-medium status-basic shape-rectangle transitions py-2 px-3 me-2">DAY</button>
                    <button className="button appearance-filled size-medium status-basic shape-rectangle transitions py-2 px-3 me-2">MONTH</button>
                    <button className="button appearance-filled size-medium status-basic shape-rectangle transitions py-2 px-3">YEAR</button>
                </div>
            </div>

            <div className="divider2"></div>
            
            <div className="d-md-flex align-items-center p-3">
                <div className="d-md-flex">
                    <div>
                        <span className="text-hint caption">Trips without Fail</span>
                        <div className="d-flex align-items-center">
                            <h5 className="heading1 text-primary text-basic me-1 mb-0">$124.000</h5>
                            <div>
                                <AiOutlineArrowUp className="text-primary me-1" />
                                <span className="text-primary text-hint caption">0,5%</span>
                            </div>
                        </div>
                    </div>

                    <div className="divider mx-4 d-none d-md-block"></div>

                    <div>
                        <span className="text-hint caption">Trips with Delay</span>
                        <div className="d-flex align-items-center">
                            <h5 className="heading2 text-basic me-1 mb-0">$100.000</h5>
                            <div>
                                <AiOutlineArrowUp className="text-primary me-1" />
                                <span className="text-primary text-hint caption">0,5%</span>
                            </div>
                        </div>
                    </div>

                    <div className="divider mx-4 d-none d-md-block"></div>

                    <div>
                        <span className="text-hint caption">Failed Trips</span>
                        <div className="d-flex align-items-center">
                            <h5 className="heading3 text-basic me-1 mb-0">$4.000</h5>
                            <div>
                                <AiOutlineArrowDown className="text-warning me-1" />
                                <span className="text-warning text-hint caption">0,5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactEcharts
                option={getOption()}
                style={{ height: "301px", width: "100%" }}
            />
        </>
    )
};

export default TripsChart;