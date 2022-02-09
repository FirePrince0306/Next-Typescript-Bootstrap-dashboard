import ReactEcharts from "echarts-for-react";

import { AiOutlineArrowUp } from 'react-icons/ai';

const DistanceChart = () => {
    function getOption() {
        return {
            color: "#20c997",
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: "10px",
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
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
                    ],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '40%',
                    data: [30000, 85000, 40000, 60000, 68000, 65000, 40000, 90000, 92000, 30000, 40000, 55000]
                }
            ] 
        };
    }

    return (
        <>
            <div className="p-3 d-md-flex justify-content-between">
                <h6 className="heading text-basic mb-3 mb-md-0">Driving Distance</h6>
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
                        <span className="text-hint caption">Total Distance</span>
                        <div className="d-flex align-items-center">
                            <h5 className="heading1 text-basic me-1 mb-0">35.678 km</h5>
                            <div>
                                <AiOutlineArrowUp className="text-primary me-1" />
                                <span className="text-primary text-primary caption">0,5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactEcharts
                option={getOption()}
                style={{ height: "310px", width: "100%" }}
            />
        </>
    )
};

export default DistanceChart;