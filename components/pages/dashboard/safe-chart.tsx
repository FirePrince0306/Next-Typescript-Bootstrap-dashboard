import ReactEcharts from "echarts-for-react";

const SafeChart = () => {
    function getOption() {
        return {
            series: [
                {
                    color: "#37bc7f",
                    type: 'gauge',
                    center: ["50%", "50%"],
                    radius: "70%",
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
                            width: 12
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
                    data: [{
                        value: 78,
                        name: 'Good',
                        detail: {
                            valueAnimation: true,
                            offsetCenter: ['0%', '0%']
                        }
                    }],
                    title: {
                        show: false
                    },
                    detail: {
                        fontSize: 22,
                        color: "#000",
                        formatter: '{value}%'
                    }
                }
            ]
        };
    }

    return (
        <>
            <ReactEcharts
                option={getOption()}
                style={{ height: "220px", width: "100%" }}
            />
        </>
    )
};

export default SafeChart;