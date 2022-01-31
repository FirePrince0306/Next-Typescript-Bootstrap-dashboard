import React from 'react';
import {Tab, Nav} from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';

import { VehiclesService } from '~/components/utils/vehicles.service';

import VehicleAssigned from '~/pages/vehicles/shared/vehicle-assigned';

const options1 = [
    { value: 'all-vehicles', label: 'All Vehicles' },
    { value: 'vehicle1', label: 'Vehicle 1' },
    { value: 'vehicle2', label: 'Vehicle 2' }
]

const AssignmentTabs = () => {
    const MyVehiclesService: VehiclesService = new VehiclesService();

    let assignedVehicles = MyVehiclesService.getAssignedVehicles();
    let unAssignedVehicles = MyVehiclesService.getNotAssignedVehicles();
    
    return (
        <div className="event-tabs">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="assigned">
                <Nav variant="pills" className="justify-content-start flex-nowrap">
                    <Nav.Item>
                        <Nav.Link eventKey="assigned" >ASSIGNED</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="not-assigned" >NOT ASSIGNED</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="assigned">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
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
                                <DatePicker
                                    className="input"
                                    placeholderText="Enter date"
                                />
                            </div>
                                    
                            <div className="mb-3 mb-lg-0">
                                <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold">
                                    <IoMdClose className="fs-5 pe-2 fs-5" />
                                    <span>REMOVE ASSIGNMENT</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2 mb-4"></div>
                        
                        <div style={{overflowX: "auto"}}>
                            <div style={{minWidth: "890px"}}>
                                <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "17%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "19.7%"}}>
                                        <label className="text-hint label me-1">DRIVER</label>
                                    </div>
                                    <div style={{width: "20%"}}>
                                        <label className="text-hint label ps-3 ms-1">DATES</label>
                                    </div>
                                    <div style={{width: "11.9%"}}>

                                    </div>
                                    <div style={{width: "4%"}}>

                                    </div>
                                </div>

                                {
                                    assignedVehicles.map((item, index) => {
                                        return (
                                            <VehicleAssigned item={item} key={"vehicle-assigned-" + index} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="not-assigned">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                                <Select
                                    className="me-md-2 me-0 mb-3 mb-md-0"
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
                                <DatePicker
                                    className="input"
                                    placeholderText="Enter date"
                                />
                            </div>
                                    
                            <div className="mb-3 mb-lg-0">
                                <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold">
                                    <BsPerson className="fs-4 fw-bold pe-2" />
                                    <span>ASSIGN</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2 mb-4"></div>
                        
                        <div style={{overflowX: "auto"}}>
                            <div style={{minWidth: "890px"}}>
                                <div className="d-flex mb-2">
                                    <div style={{width: "4.8%"}}>
                                        
                                    </div>
                                    <div style={{width: "22.6%"}}>
                                        <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "17%"}}>
                                        <label className="text-hint label">TYPE</label>
                                    </div>
                                    <div className="ps-3" style={{width: "19.7%"}}>
                                        <label className="text-hint label me-1">DRIVER</label>
                                    </div>
                                    <div style={{width: "20%"}}>
                                        <label className="text-hint label ps-3 ms-1">DATES</label>
                                    </div>
                                    <div style={{width: "11.9%"}}>

                                    </div>
                                    <div style={{width: "4%"}}>

                                    </div>
                                </div>
                                {
                                    unAssignedVehicles.map((item, index) => {
                                        return (
                                            <VehicleAssigned item={item} key={"vehicle-not-assigned-" + index} />
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
 
 export default AssignmentTabs;