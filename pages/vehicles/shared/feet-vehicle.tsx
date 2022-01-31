import ReactEcharts from "echarts-for-react";

import { GoCircleSlash } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiMapPinFill } from 'react-icons/ri';
import { BsThreeDotsVertical, BsFillCheckCircleFill } from 'react-icons/bs';
import { IoNavigateSharp } from 'react-icons/io5';
import { FiAlertTriangle, FiActivity } from 'react-icons/fi';

import {Vehicle} from '~/components/features/common';

export type FeetVehicleProps = {
    item: Vehicle
};

import {useState} from 'react';

const FeetVehicle: React.FC<FeetVehicleProps> = ({item}: FeetVehicleProps) => {
    const [isChecked, setIsChecked]=useState(false);

    const builderJson = {
        all: 100,
        charts: {
            map: 20
        },
    }

    function getImageSource(): any {
        const vehicleStatus = item.status.replace(/\s/g, '');
        return require(`/public/images/${item.type.toLowerCase()}-${vehicleStatus}.png`);
    }

    function getOption() {
        return {
            title: {
                text: `${item.condition.overview}%`,
                top: "top",
                left: "center",
                textStyle: {
                    fontSize: 12,
                    color: "#818894"
                }
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                show: false
            },
            grid: {
                left: "0%",
                top: "20px",
                width: "100%"
            },
            height: "24px",
            width: "80%",
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
                    type: 'bar',
                    stack: 'chart',
                    itemStyle: {
                        radius: "5px",
                        color: function(): String {
                            return item.condition.overview > 66 ? "#0D8A72" : item.condition.overview > 33 ? "#ffb94d" : "#ef6454"
                        }
                    },
                    z: 3,
                    label: {
                        show: false
                    },
                    data: Object.keys(builderJson.charts).map(() => {
                        var value = item.condition.overview;
                        return value;
                    })
                },
                {
                    type: 'bar',
                    stack: 'chart',
                    silent: true,
                    itemStyle: {
                        color: '#eee'
                    },
                    data: Object.keys(builderJson.charts).map(() => {
                        var value = builderJson.all - item.condition.overview;
                        return value;
                    })
                }
            ]
        };
    }

    function checkHandler(): void {

    }

    return (
        <>
            <div className="d-flex align-items-center border border-1 rounded-3 pt-10 pb-10 mb-10 vehicle-event">
                <div className="checkbox d-flex justify-content-center ps-2" style={{width: "4.8%"}}>
                    <input style={{float: 'left', borderColor: 'red', border: '3px'}} type="checkbox" checked={isChecked} onChange={checkHandler}/>
                    <span className="wrapper" onClick={()=>{setIsChecked(!isChecked)}}>
                        <AiOutlineCheck className="text-white" />
                    </span>
                </div>

                <div className="d-flex" style={{width: "22.6%"}}>
                    <img className="image" src={getImageSource().default.src} width="42" height="42" />
                    <div className="d-flex flex-column ms-2 ps-1">
                        <span className="heading text-basic fw-bold">{item.name}</span>
                        <span className="text-hint caption-2">{item.vin}</span>
                    </div>
                </div>

                <div className="ps-3" style={{width: "11.8%"}}>
                    <span className="text-hint caption-2">{item.type}</span>
                </div>

                <div className="d-flex align-items-center ps-3" style={{width: "17.3%"}}>
                    {
                        item.status === 'on route' ? 
                            <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                <IoNavigateSharp className="text-primary me-1" />
                                <span className="text-primary subtitle">On Route</span>
                            </div> : item.status === 'available' ?
                                <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                    <BsFillCheckCircleFill className="text-info me-1" />
                                    <span className="text-info subtitle">Available</span>
                                </div> :
                                    <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                        <GoCircleSlash className="text-danger me-1" />
                                        <span className="text-danger subtitle">Out of Service</span>
                                    </div>
                    }
                </div>

                <div className="d-flex align-items-center" style={{width: "13.8%"}}>
                    <ReactEcharts
                        option={getOption()}
                        style={{ height: "40px", width: "100%", padding: "0 30px 0 20px" }}
                    />
                </div>

                <div className="ps-3" style={{width: "13.8%"}}>
                    {
                        item.indicators.engine && item.indicators.battery ? <GoCircleSlash className="text-disabled fs-5 me-2" /> : <></>
                    }
                    {
                        !item.indicators.battery ? <FiAlertTriangle className="text-danger fs-5 me-2" /> : <></>
                    }
                    {
                        !item.indicators.engine ? <FiActivity className="text-danger fs-5 me-2" /> : <></>
                    }
                </div>

                <div className="d-flex justify-content-end" style={{width: "11.9%"}}>
                    <button className="button size-xl-small appearance-filled size-medium status-basic shape-rectangle icon-start transitions">
                        <RiMapPinFill className="me-2" />
                        <span>live view</span>
                    </button>
                </div>

                <div className="d-flex justify-content-center" style={{width: "4%"}}>
                    <BsThreeDotsVertical className="me-2" />
                </div>
            </div>
        </>
    )
};

export default FeetVehicle;