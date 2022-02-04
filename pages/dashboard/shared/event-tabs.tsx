import React from 'react';
import {Tab, Nav} from "react-bootstrap";
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight, FaArrowDown } from 'react-icons/fa';

import { EventsService } from '~/components/utils/events.service';

import VehicleEvent from '~/pages/dashboard/shared/vehicle-event';

const options1 = [
    { value: 'all-events', label: 'All Events' },
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
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

const EventTabs = () => {
    const MyEventsService: EventsService = new EventsService();

    let allVehicles = MyEventsService.getEvents();
    let featuredVehicles = MyEventsService.getEvents().slice(1, 2);

    function datePickHandler():void {

    }

    return (
        <div className="event-tabs">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="all-events">
                <Nav variant="pills" className="justify-content-start flex-nowrap">
                    <Nav.Item>
                        <Nav.Link eventKey="all-events" >ALL EVENTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="featured-events" >FEATURED EVENTS</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="all-events">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options1}
                                    id="type-selector"
                                    instanceId="type-selector"
                                    inputId="type-selector"
                                    isSearchable={true}
                                    placeholder="All Types"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options2}
                                    isSearchable={true}
                                    id="vehicle-selector"
                                    instanceId="vehicle-selector"
                                    inputId="vehicle-selector"
                                    placeholder="All Vehicles"
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
                                <button className="button size-xl-button size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold">
                                    <IoMdClose className="fs-5 pe-2" />
                                    <span>clear</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2"></div>

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
                                    id="count-selector"
                                    instanceId="count-selector"
                                    inputId="count-selector"
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
                                    <div style={{width: "16%"}}>
                                        <label className="text-hint label">EVENT TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "24%"}}>
                                        <label className="text-hint label">MESSAGE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "23%"}}>
                                        <label className="text-hint label me-1">DATE&TIME</label>
                                        <FaArrowDown className="fs-6 text-hint" />
                                    </div>
                                    <div style={{width: "21%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div style={{width: "11.2%"}}>

                                    </div>
                                </div>

                                {
                                    allVehicles.map((item, index) => {
                                        return (
                                            <VehicleEvent item={item} key={"vehicle-event-" + index} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="featured-events">
                    <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options1}
                                    isSearchable={true}
                                    id="type-selector-2"
                                    instanceId="type-selector-2"
                                    inputId="type-selector-2"
                                    placeholder="All Types"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options2}
                                    isSearchable={true}
                                    id="vehicle-selector-2"
                                    instanceId="vehicle-selector-2"
                                    inputId="vehicle-selector-2"
                                    placeholder="All Vehicles"
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
                                <button className="button size-xl-button size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold">
                                    <IoMdClose className="fs-5 pe-2" />
                                    <span>clear</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2"></div>

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
                                    <div style={{width: "16%"}}>
                                        <label className="text-hint label">EVENT TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "24%"}}>
                                        <label className="text-hint label">MESSAGE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "23%"}}>
                                        <label className="text-hint label me-1">DATE&TIME</label>
                                        <FaArrowDown className="fs-6 text-hint" />
                                    </div>
                                    <div style={{width: "21%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div style={{width: "11.2%"}}>

                                    </div>
                                </div>
                                {
                                    featuredVehicles.map((item, index) => {
                                        return (
                                            <VehicleEvent item={item} key={"vehicle-event-featured-" + index} />
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
 
 export default EventTabs;