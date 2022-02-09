import ReactEcharts from "echarts-for-react";

const VehicleCondition = () => {
    const gaugeData = [
        {
            value: 52,
            name: 'Good',
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '0%']
            }
        },
        {
            value: 14,
            name: 'Satisfactory',
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '0%']
            }
        },
        {
            value: 7,
            name: 'Critical',
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '0%']
            }
        }
    ];
    
    const colorData = ["rgb(55, 188, 127)", "rgb(255, 185, 77)", "rgb(239, 100, 84)"];

    function getOption(index: number) {
        return {
            title: {
                text: gaugeData[index].name,
                left: 'center',
                top: 10,
                textStyle: {
                    fontSize: 12,
                    fontWeight: 600,
                    color: colorData[index],    
                }
            },
            series: [
                {
                    color: [colorData[index]],
                    type: 'gauge',
                    center: ["50%", "65%"],
                    radius: "40px",
                    animationDuration: 5000,
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                    },
                    axisLine: {
                        lineStyle: {
                            width: 6
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: [ gaugeData[index] ],
                    title: {
                        show: false
                    },
                    detail: {
                        width: 50,
                        height: 14,
                        fontSize: 14,
                        color: "#000",
                        borderColor: false,
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: function(value: number) {
                            let total = 0;
                            gaugeData.map(item => {
                                total += item.value;
                            })
                            return `${(value * 100 / total).toFixed(0)}%`;
                        }
                    }
                }
            ]
        }
    };

    return (
        <>
            <div className="border border-1 rounded-3 bg-white p-4 m-2 vehicle-condition">
                <h6 className="heading text-basic">Vehicle Condition</h6>
                <div className="pt-3">
                    <div className="echart d-flex">
                        <div className="p-2 ms-0">
                            <ReactEcharts
                                option={getOption(0)}
                                className="ms-0"
                                style={{ height: "140px" }}
                            />
                            <div className="divider2"></div>
                            <div className="text-center p-3">
                                <h6 className="heading text-basic mb-0">{gaugeData[0].value}</h6>
                                <span className="text1 text-hint caption-2">Vehicles</span>
                            </div>
                        </div>
                        <div className="p-2">
                            <ReactEcharts
                                option={getOption(1)}
                                style={{ height: "140px" }}
                            />
                            <div className="divider2"></div>
                            <div className="text-center p-3">
                                <h6 className="heading text-basic mb-0">{gaugeData[1].value}</h6>
                                <span className="text1 text-hint caption-2">Vehicles</span>
                            </div>
                        </div>
                        <div className="p-2 me-0">
                            <ReactEcharts
                                option={getOption(2)}
                                className="me-0"
                                style={{ height: "140px" }}
                            />
                            <div className="divider2"></div>
                            <div className="text-center p-3">
                                <h6 className="heading text-basic mb-0">{gaugeData[2].value}</h6>
                                <span className="text1 text-hint caption-2">Vehicles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default VehicleCondition;