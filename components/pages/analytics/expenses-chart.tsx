import ReactEcharts from "echarts-for-react";

const ExpensesChart = () => {
    const legend = [{
        name: "Maintenance",
        value: 30000,
    }, {
        name: "Labor Cost",
        value: 30000,
    }, {
        name: "Fuel",
        value: 25000,
    }, {
        name: "Other",
        value: 15000,
    }];

    function getOption() {
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: "vertical",
                right: "5%",
                top: "24%",
                data: legend,
                textStyle: {
                    fontFamily: "'Open Sans', sans-serif",
                    color: 'inherit',
                    padding: [0, 0, 0, 10],
                    rich: {
                        a: {
                            lineHeight: 24,
                            fontWeight: 600,
                            fontSize: 15,
                        },
                        b: {
                            color: "#818894",
                            lineHeight: 24,
                            fontWeight: 600,
                            fontSize: 15,
                        }
                    }
                },
                itemGap: 16,
                itemWidth: 2,
                itemHeight: 44,
                formatter: function(name: String, data: { name: string; value: number; }[] = legend) {
                    let itemValue = data.filter(item => item.name === name);
                    let total = 0;
                    data.map(item => total += item.value);
                    return `{a|${name}}\n{b|${itemValue[0].value}$ | ${itemValue[0].value * 100 / total}%}`
                },
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['45%', '54%'],
                    avoidLabelOverlap: false,
                    center: ["28%", "50%"],
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '26',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 30000, name: 'Maintenance' },
                        { value: 30000, name: 'Labor Cost' },
                        { value: 25000, name: 'Fuel' },
                        { value: 15000, name: 'Other' },
                    ]
                }
            ]
        };
    }

    return (
        <>
            <div className="p-3 d-md-flex justify-content-between">
                <h6 className="heading text-basic mb-0">Expenses</h6>
            </div>

            <div className="divider2"></div>

            <ReactEcharts
                option={getOption()}
                style={{ height: "400px", width: "100%" }}
            />
        </>
    )
};

export default ExpensesChart;