import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

const IdleChart = () => {
    function getOption() {
        return {
            color: "#ffb94d",
            grid: {
                left: "60px",
                top: "20px",
                bottom: "12%",
                right: "20px"
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
                    data: [
                        30000, 110000, 60000, 80000, 70000, 90000, 85000, 100000, 115000, 40000, 45000, 70000
                    ],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: 'rgba(255, 185, 77, .8)'
                          },
                          {
                            offset: 1,
                            color: 'rgba(255, 185, 77, .2)'
                          }
                        ])
                    },
                },
            ]
        };
    }

    return (
        <>
            <div className="p-3 d-md-flex justify-content-between">
                <h6 className="heading text-basic mb-3 mb-md-0">Idle Cost</h6>
            </div>

            <div className="divider2"></div>
            
            <div className="d-md-flex align-items-center p-3">
                <div className="d-md-flex">
                    <div>
                        <span className="text-hint caption">Total Idle Time This Year</span>
                        <div className="d-flex align-items-center">
                            <h5 className="heading1 text-primary text-basic me-1 mb-0">1800h</h5>
                        </div>
                    </div>

                    <div className="divider mx-4 d-none d-md-block"></div>

                    <div>
                        <span className="text-hint caption">Idle Cost</span>
                        <div className="d-flex align-items-center">
                            <h5 className="heading2 text-basic me-1 mb-0">$124.000</h5>
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

export default IdleChart;