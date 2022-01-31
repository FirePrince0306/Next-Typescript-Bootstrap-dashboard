import React from 'react';
import {Tab, Nav} from "react-bootstrap";
import Select from 'react-select';

import { IoMdClose } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { VehiclesService } from '~/components/utils/vehicles.service';

import FeetVehicle from '~/pages/vehicles/shared/feet-vehicle';

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
    { value: 'all-errors', label: 'All Errors' },
    { value: 'engine-error', label: 'Engine Error' },
    { value: 'oil-level', label: 'Oil Level' }
]

const options4 = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' }
]

const VehicleTabs = () => {
    const MyVehiclesService: VehiclesService = new VehiclesService();

    let allVehicles = MyVehiclesService.getVehicles();
    let onRouteVehicles = MyVehiclesService.getOnRouteVehicles();
    let availableVehicles = MyVehiclesService.getAvailableVehicles();
    let outOfServiceVehicles = MyVehiclesService.getOutOfServiceVehicles();

    return (
        <div className="event-tabs">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="all-vehicle">
                <Nav variant="pills" className="d-block d-md-flex justify-content-start">
                    <Nav.Item>
                        <Nav.Link eventKey="all-vehicle" >ALL STATUSES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="onroute-vehicle" >ON ROUTE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="available-vehicle" >AVAILABLE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="outofservice-vehicle" >OUT OF SERVICE</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="all-vehicle">
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
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options3}
                                    isSearchable={true}
                                    id="error-selector"
                                    instanceId="error-selector"
                                    inputId="error-selector"
                                    placeholder="All Errors"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
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
                                    options={options4}
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
                            <div style={{minWidth: "920px"}}>
                                <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "11.8%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "17.3%"}}>
                                        <label className="text-hint label me-1">STATUS</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 ms-1">HEALTH RATE</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 me-1">CRITICAL ERRORS</label>
                                    </div>
                                    <div style={{width: "11.9%"}}>
                                        
                                    </div>
                                    <div style={{width: "4%"}}>
                                        
                                    </div>
                                </div>

                                {
                                    allVehicles.map((item, index) => {
                                        return (
                                            <FeetVehicle item={item} key={"feet-vehicle-" + index} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="onroute-vehicle">
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
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options3}
                                    isSearchable={true}
                                    id="error-selector-2"
                                    instanceId="error-selector-2"
                                    inputId="error-selector-2"
                                    placeholder="All Errors"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
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
                                    options={options4}
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
                            <div style={{minWidth: "920px"}}>
                                <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "11.8%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "17.3%"}}>
                                        <label className="text-hint label me-1">STATUS</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 ms-1">HEALTH RATE</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 me-1">CRITICAL ERRORS</label>
                                    </div>
                                    <div style={{width: "11.9%"}}>
                                        
                                    </div>
                                    <div style={{width: "4%"}}>
                                        
                                    </div>
                                </div>
                                {
                                    onRouteVehicles.map((item, index) => {
                                        return (
                                            <FeetVehicle item={item} key={"feet-vehicle-onroute-" + index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="available-vehicle">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options1}
                                    isSearchable={true}
                                    id="type-selector-3"
                                    instanceId="type-selector-3"
                                    inputId="type-selector-3"
                                    placeholder="All Types"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options2}
                                    isSearchable={true}
                                    id="vehicle-selector-3"
                                    instanceId="vehicle-selector-3"
                                    inputId="vehicle-selector-3"
                                    placeholder="All Vehicles"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options3}
                                    isSearchable={true}
                                    id="error-selector-3"
                                    instanceId="error-selector-3"
                                    inputId="error-selector-3"
                                    placeholder="All Errors"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
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
                                    options={options4}
                                    isSearchable={true}
                                    id="count-selector-3"
                                    instanceId="count-selector-3"
                                    inputId="count-selector-3"
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
                            <div style={{minWidth: "920px"}}>
                            <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "11.8%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "17.3%"}}>
                                        <label className="text-hint label me-1">STATUS</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 ms-1">HEALTH RATE</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 me-1">CRITICAL ERRORS</label>
                                    </div>
                                    <div style={{width: "11.9%"}}>
                                        
                                    </div>
                                    <div style={{width: "4%"}}>
                                        
                                    </div>
                                </div>
                                {
                                    availableVehicles.map((item, index) => {
                                        return (
                                            <FeetVehicle item={item} key={"feet-vehicle-available-" + index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="outofservice-vehicle">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options1}
                                    isSearchable={true}
                                    id="type-selector-4"
                                    instanceId="type-selector-4"
                                    inputId="type-selector-4"
                                    placeholder="All Types"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options2}
                                    isSearchable={true}
                                    id="vehicle-selector-4"
                                    instanceId="vehicle-selector-4"
                                    inputId="vehicle-selector-4"
                                    placeholder="All Vehicles"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
                                    options={options3}
                                    isSearchable={true}
                                    id="error-selector-4"
                                    instanceId="error-selector-4"
                                    inputId="error-selector-4"
                                    placeholder="All Errors"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
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
                                    options={options4}
                                    isSearchable={true}
                                    id="count-selector-4"
                                    instanceId="count-selector-4"
                                    inputId="count-selector-4"
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
                            <div style={{minWidth: "920px"}}>
                            <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "11.8%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "17.3%"}}>
                                        <label className="text-hint label me-1">STATUS</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 ms-1">HEALTH RATE</label>
                                    </div>
                                    <div style={{width: "13.8%"}}>
                                        <label className="text-hint label ps-3 me-1">CRITICAL ERRORS</label>
                                    </div>
                                    <div style={{width: "11.9%"}}>
                                        
                                    </div>
                                    <div style={{width: "4%"}}>
                                        
                                    </div>
                                </div>
                                {
                                    outOfServiceVehicles.map((item, index) => {
                                        return (
                                            <FeetVehicle item={item} key={"feet-vehicle-outofservice-" + index} />
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
 
 export default VehicleTabs;