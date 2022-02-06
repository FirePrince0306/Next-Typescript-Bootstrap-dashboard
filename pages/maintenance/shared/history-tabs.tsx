import React from 'react';
import {Tab, Nav} from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { AiFillSetting, AiOutlineArrowDown } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import HistoryListItem from './history-list-item';

const options1 = [
    { value: 'ab-1512', label: 'AB 1512' },
    { value: 'vb-5432', label: 'VB 5432' }
]

const options2 = [
    { value: 'all-vehicles', label: 'All Vehicles' },
    { value: 'vehicle1', label: 'Vehicle 1' },
    { value: 'vehicle2', label: 'Vehicle 2' }
]

const options3 = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' }
]

const HistoryTabs = () => {    
    function datePickHandler(): void {
    }

    const history = [
        {
            name: 'AB 4567',
            cost: '$600',
            status: 'ON ROUTE',
            tasks: [
                {
                    name: 'Oil Change',
                    price: 495,
                },
                {
                    name: 'Engine Examination',
                    price: 105,
                }
            ]
        },
        {
            name: 'TR 2415',
            cost: '$150',
            status: 'ON ROUTE',
            tasks: [
                {
                    name: 'Filter Replace',
                    price: 150,
                }
            ]
        },
        {
            name: 'VB 4356',
            cost: '$1204',
            status: 'ON ROUTE',
            tasks: [
                {
                    name: 'Engine Repair',
                    price: 1204,
                }
            ]
        },
        {
          name: 'ZZ 2131',
          cost: '$250',
          status: 'ON ROUTE',
            tasks: [
                {
                    name: 'Oil Change',
                    price: 100,
                },
                {
                    name: 'Filter Replace',
                    price: 150,
                }
            ]
        },
        {
            name: 'RG 1235',
            cost: '$250',
            status: 'ON ROUTE',
            tasks: [
                {
                    name: 'Oil Change',
                    price: 100,
                },
                {
                    name: 'Filter Replace',
                    price: 150,
                }
            ]
        }
    ];
    
    const planned = [
        {
            name: 'CR 1565',
            cost: '$105',
            status: 'OUT OF SERVICE',
            tasks: [
                {
                    name: 'Engine Examination',
                    price: 105,
                }
            ]
        },
        {
            name: 'TG 4568',
            cost: '$300',
            status: 'OUT OF SERVICE',
            tasks: [
                {
                    name: 'Oil Change',
                    price: 300,
                },
            ]
        },
        {
            name: 'AA 2452',
            cost: '$350',
            status: 'OUT OF SERVICE',
            tasks: [
                {
                    name: 'Oil Change',
                    price: 100,
                },
                {
                    name: 'Filter Replace',
                    price: 150,
                }
            ]
        },
        {
            name: 'BV 2346',
            cost: '$350',
            status: 'OUT OF SERVICE',
            tasks: [
                {
                    name: 'Oil Change',
                    price: 100,
                },
                {
                    name: 'Filter Replace',
                    price: 150,
                }
            ]
        }
    ];
    
    return (
        <div className="event-tabs">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="history">
                <Nav variant="pills" className="justify-content-start flex-nowrap">
                    <Nav.Item>
                        <Nav.Link eventKey="history" >HISTORY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="planned" >PLANNED</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="history">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0 status-basic"
                                    options={options1}
                                    isSearchable={true}
                                    id="vehicle-selector"
                                    instanceId="vehicle-selector"
                                    inputId="vehicle-selector"
                                    placeholder="All Vehicles"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />

                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0 status-basic"
                                    options={options2}
                                    isSearchable={true}
                                    id="task-selector"
                                    instanceId="task-selector"
                                    inputId="task-selector"
                                    placeholder="All Tasks"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <DatePicker
                                    className="input status-basic"
                                    placeholderText="Enter date"
                                    readOnly={false}
                                    onChange={datePickHandler}
                                />
                            </div>
                                    
                            <div className="mb-3 mb-lg-0">
                                <button className="button size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold">
                                    <IoMdClose className="fs-5 pe-2 fs-5" />
                                    <span>clear</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2 mb-2"></div>

                        <div className="d-md-flex align-items-center justify-content-between my-1 py-2">
                            <div className="d-flex">
                                <button className="size-xl-medium appearance-ghost size-medium status-basic shape-rectangle icon-start transitions me-2">
                                    <AiFillSetting className="fs-5" />
                                    <span className="d-none">button</span>
                                </button>
                                <button className="size-xl-medium appearance-ghost size-medium status-basic shape-rectangle icon-start transitions">
                                    <BsFillTrashFill className="fs-5" />
                                    <span className="d-none">button</span>
                                </button>
                            </div>

                            <div className="d-flex flex-wrap align-items-center mt-3 mt-md-0">
                                <label className="text-hint label me-2 mb-3 mb-md-0 d-none d-md-block">Items on page</label>
                                <Select
                                    className="me-2 select-count mb-3 mb-md-0"
                                    options={options3}
                                    isSearchable={true}
                                    id="count-selector-2"
                                    instanceId="count-selector-2"
                                    inputId="count-selector-2"
                                    placeholder="20"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <div className="d-flex mb-3 mb-md-0">
                                    <button className="button3 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                        <FaAngleLeft className="fs-5 text-hint" />
                                        <span className="d-none">Button</span>
                                    </button>
                                    <button className="button3 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                        <FaAngleRight className="fs-5 text-hint" />
                                        <span className="d-none">Button</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{overflowX: "auto"}}>
                            <div style={{minWidth: "890px"}}>
                                <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "16%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "30.6%"}}>
                                        <label className="text-hint label me-1">TASKS</label>
                                    </div>
                                    <div className="text-end" style={{width: "10%"}}>
                                        <label className="text-hint label me-1">COST</label>
                                        <AiOutlineArrowDown className="text-hint" />
                                    </div>
                                    <div style={{width: "12%"}}>

                                    </div>
                                    <div style={{width: "4%"}}>

                                    </div>
                                </div>

                                {
                                    history.map((item, index) => {
                                        return (
                                            <HistoryListItem vehicleName={item.name} cost={item.cost} status={item.status} tasks={item.tasks} key={"history-" + index} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="planned">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0 status-basic"
                                    options={options1}
                                    isSearchable={true}
                                    id="vehicle-selector-2"
                                    instanceId="vehicle-selector-2"
                                    inputId="vehicle-selector-2"
                                    placeholder="All Vehicles"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0 status-basic"
                                    options={options2}
                                    isSearchable={true}
                                    id="task-selector2"
                                    instanceId="task-selector2"
                                    inputId="task-selector2"
                                    placeholder="All Tasks"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <DatePicker
                                    className="input status-basic"
                                    placeholderText="Enter date"
                                    readOnly={false}
                                    onChange={datePickHandler}
                                />
                            </div>
                                    
                            <div className="mb-3 mb-lg-0">
                                <button className="button size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold">
                                    <IoMdClose className="fs-5 pe-2 fs-5" />
                                    <span>clear</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2 mb-2"></div>

                        <div className="d-md-flex align-items-center justify-content-between my-1 py-2">
                            <div className="d-flex">
                                <button className="size-xl-medium appearance-ghost size-medium status-basic shape-rectangle icon-start transitions me-2">
                                    <AiFillSetting className="fs-5" />
                                    <span className="d-none">button</span>
                                </button>
                                <button className="size-xl-medium appearance-ghost size-medium status-basic shape-rectangle icon-start transitions">
                                    <BsFillTrashFill className="fs-5" />
                                    <span className="d-none">button</span>
                                </button>
                            </div>

                            <div className="d-flex flex-wrap align-items-center mt-3 mt-md-0">
                                <label className="text-hint label me-2 mb-3 mb-md-0 d-none d-md-block">Items on page</label>
                                <Select
                                    className="me-2 select-count mb-3 mb-md-0"
                                    options={options3}
                                    isSearchable={true}
                                    id="count-selector-2"
                                    instanceId="count-selector-2"
                                    inputId="count-selector-2"
                                    placeholder="20"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <div className="d-flex mb-3 mb-md-0">
                                    <button className="button3 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                        <FaAngleLeft className="fs-5 text-hint" />
                                        <span className="d-none">Button</span>
                                    </button>
                                    <button className="button3 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                        <FaAngleRight className="fs-5 text-hint" />
                                        <span className="d-none">Button</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{overflowX: "auto"}}>
                            <div style={{minWidth: "890px"}}>
                            <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "16%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "30.6%"}}>
                                        <label className="text-hint label me-1">TASKS</label>
                                    </div>
                                    <div className="text-end" style={{width: "10%"}}>
                                        <label className="text-hint label me-1">COST</label>
                                        <AiOutlineArrowDown className="text-hint" />
                                    </div>
                                    <div style={{width: "12%"}}>

                                    </div>
                                    <div style={{width: "4%"}}>

                                    </div>
                                </div>
                                {
                                    planned.map((item, index) => {
                                        return (
                                            <HistoryListItem vehicleName={item.name} cost={item.cost} status={item.status} tasks={item.tasks} key={"history-" + index} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
 }
 
 export default HistoryTabs;