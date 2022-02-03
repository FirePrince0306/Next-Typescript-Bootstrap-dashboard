import ReactEcharts from "echarts-for-react";

const TripsChart = () => {
    function getOption(): any {
        return {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                show: false
            },
            grid: {
                left: "0%",
                top: "0%",
                width: "100%"
            },
            width: "80%",
            height: "20px",
            left: "0%",
            top: "0%",
            xAxis: {
                type: 'value',
                show: false
            },
            yAxis: {
                type: 'category',
                data: ['performance'],
                show: false
            },
            series: [
                {
                    name: 'Live Tips',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    data: [63]
                },
                {
                    name: 'Completed',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    data: [31]
                },
                {
                    name: 'Being Late',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    data: [16]
                },
                {
                    name: 'Failed',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    data: [8]
                }
            ]
        };
    }

    return (
        <>
            <ReactEcharts
                option={getOption()}
                style={{ height: "24px", width: "100%" }}
            />
        </>
    )
};

export default TripsChart;