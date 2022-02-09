import ReactEcharts from "echarts-for-react";

const Expenses = () => {
    const legend = [{
        name: "On Route",
        value: 134,
    }, {
        name: "Available",
        value: 45,
    }, {
        name: "Out of Service",
        value: 15,
    }];

    function getOption() {
        return {
            color: ["#0D8A72", "#37bc7f", "#ffb94d"],
            tooltip: {
                trigger: "item",
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                right: "3%",
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
                    let itemValue = data.filter(item => item.name === name)
                    return `{a|${name}}\n{b|${itemValue[0].value}}`
                },
            },
            series: [
                {
                    name: "",
                    type: "pie",
                    radius: "70%",
                    center: ["28%", "60%"],
                    animationDuration: 3000,
                    data: legend,
                    labelLine: false,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        }
    };

    return (
        <>
            <div className="border border-1 rounded-3 bg-white p-4 pb-5 m-2 expenses">
                <h6 className="heading text-basic">Total Vehicles</h6>
                <div className="pb-3">
                    <div className="echart">
                        <ReactEcharts
                            option={getOption()}
                            style={{ height: "241px", width: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Expenses;