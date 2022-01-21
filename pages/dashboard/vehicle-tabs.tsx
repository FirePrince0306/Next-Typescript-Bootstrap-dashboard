import React from 'react';
import {Tab, Nav} from "react-bootstrap";

import { Trip } from '~/components/features/common';
import { TripsService } from '~/components/framework/utils/trips.service';

import VehicleCard from './vehicle';

export type VehicleTabsProps = {
    handleActiveVehicleId: (id: number) => void;
    handleCurrentVehicle: (trip: Trip | null) => void;
    id: number;
};
 
const VehicleTabs = ({handleActiveVehicleId, handleCurrentVehicle, id}: VehicleTabsProps) => {
	const MyTripsService:TripsService = new TripsService();
    let drivingVehicles = MyTripsService.getTripsWithDrivingVehicles();
    let parkedVehicles = MyTripsService.getTripsWithParkedVehicles();
    let allVehicles = MyTripsService.getTrips();
    
    return (
        <div className="vehicle-tabs">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="all">
                <Nav variant="pills" className="justify-content-around flex-nowrap">
                    <Nav.Item>
                        <Nav.Link eventKey="all" onClick={()=> {handleActiveVehicleId(-1); handleCurrentVehicle(null)}}>ALL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="driving" onClick={()=> {handleActiveVehicleId(-1); handleCurrentVehicle(null)}}>DRIVING</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="parked" onClick={()=> {handleActiveVehicleId(-1); handleCurrentVehicle(null)}}>PARKED</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="all">
                        {
                            allVehicles.map((item, index) => {
                                return (
                                    <VehicleCard trip={item} selected={id === index} key={'vehicle-' + index} handleActiveVehicleId={handleActiveVehicleId} handleCurrentVehicle={handleCurrentVehicle} id={index}/>
                                )
                            })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="driving">
                        {
                            drivingVehicles.map((item, index) => {
                                return (
                                    <VehicleCard trip={item} selected={id === index} key={'driving-vehicle-' + index} handleActiveVehicleId={handleActiveVehicleId} handleCurrentVehicle={handleCurrentVehicle} id={index}/>
                                )
                            })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="parked">
                        {
                            parkedVehicles.map((item, index) => {
                                return (
                                    <VehicleCard trip={item} selected={id === index} key={'parked-vehicle-' + index} handleActiveVehicleId={handleActiveVehicleId} handleCurrentVehicle={handleCurrentVehicle} id={index}/>
                                )
                            })
                        }
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
 }
 
 export default VehicleTabs;