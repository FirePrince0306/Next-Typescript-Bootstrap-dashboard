import { useState } from 'react';
import React from 'react';
import dynamic from "next/dynamic";
import {Tab, Nav} from "react-bootstrap";

import { GoAlert, GoClock } from 'react-icons/go';
import { BsMoon, BsPerson } from 'react-icons/bs';
import { RiCalendarTodoLine, RiTruckLine, RiMapPinFill, RiAlertLine } from 'react-icons/ri';
import { AiOutlinePieChart } from 'react-icons/ai';
import { IoFlashOutline, IoAlertCircleOutline } from 'react-icons/io5';

import { Trip } from '~/components/features/common';
import { TripsService } from '~/components/utils/trips.service';

const MapWidget = dynamic(() => import('~/pages/vehicles/shared/trip-map'), {
    ssr: false
});

export type TripTabsProps = {
};
 
const TripTabs: React.FC<TripTabsProps> = ({}) => {
    const [currentVehicle, setCurrentVehicle] = useState<Trip | null>(null);

    let MyTripsService:TripsService = new TripsService();
	let tempMarkers = MyTripsService.getMarkersData();

	const [markers, setMarkers] = useState<any>(tempMarkers);

    return (
        <div className="vehicle-tabs w-100">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="map">
                <Nav variant="pills" className="flex-nowrap">
                    <Nav.Item>
                        <Nav.Link eventKey="map">MAP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="details">DETAILS</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="h-100">
                    <Tab.Pane eventKey="map" className="h-100">
                        <MapWidget
                            data = {{
                                trip: currentVehicle,
                                markers: markers
                            }}
                        />
                    </Tab.Pane>
                    <Tab.Pane eventKey="details">
                        <div className="d-md-flex px-2 py-1 mx-md-4">
                            <div className="border border-1 rounded-3 w-50 mx-1 mx-md-2 my-2" style={{minWidth: "312px"}}>
                                <div className="p-3">
                                    <h6 className="heading text-basic mb-0">Route Details</h6>
                                </div>

                                <div className="divider2"></div>

                                <div className="p-2">
                                    <div className="d-flex info px-2">
                                        <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                            <div className="d-flex">
                                                <GoClock className="me-1 text-hint" />
                                                <span className="text text-hint caption">Trip Duration</span>
                                            </div>
                                            <span className="pt-1 text-basic subtitle-2">6h 40m</span>
                                        </div>
                                        <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                            <div className="d-flex">
                                                <BsMoon className="me-1 text-hint" />
                                                <span className="text text-hint caption">Idle Time</span>
                                            </div>
                                            <span className="pt-1 text-basic subtitle-2">2h</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 px-3 mt-1">
                                        <div className="d-flex py-3 my-1 trip-detail-card">
                                            <div className="px-3 trip-detail-card-icon">
                                                <RiMapPinFill className="fs-5 text-primary"/>
                                            </div>
                                            <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                <label className="text-hint label">DEPARTURE</label>
                                                <span className="text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                                                <span className="text-hint caption">14 May, 16:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="d-flex py-3 trip-detail-card">
                                            <div className="px-3 trip-detail-card-icon">
                                                <RiMapPinFill className="fs-5 text-danger"/>
                                            </div>
                                            <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="text-hint label">STOP</label>
                                                    <span className="text-danger caption"><GoAlert className="text-danger me-1" />Long Idle Time</span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="text-basic subtitle">706 NW 3rd St, Homestead, FL</span>
                                                    <span className="text-hint caption">14 May, 16:00 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex py-3 trip-detail-card">
                                            <div className="px-3 trip-detail-card-icon">
                                                <RiMapPinFill className="fs-5 text-warning"/>
                                            </div>
                                            <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                <label className="text-hint label">STOP</label>
                                                <span className="text-basic subtitle">330 Solitude Dr, Thayne, WY</span>
                                                <span className="text20 text-hint caption">14 May, 8:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="d-flex py-3 trip-detail-card">
                                            <div className="px-3 trip-detail-card-icon">
                                                <RiMapPinFill className="fs-5 text-primary"/>
                                            </div>
                                            <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                <label className="text21 text-hint label">STOP</label>
                                                <span className="text22 text-basic subtitle">1430 Albert St, Airway Heights, WA</span>
                                                <span className="text23 text-hint caption">13 May, 9:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="d-flex py-3 trip-detail-card">
                                            <div className="px-3 trip-detail-card-icon">
                                                <RiMapPinFill className="fs-5 text-primary"/>
                                            </div>
                                            <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                <label className="text21 text-hint label">ARRIVAL</label>
                                                <span className="text22 text-basic subtitle">5936 1575 North Ave, Princeton, IL</span>
                                                <span className="text23 text-hint caption">14 May, 11:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-50 mx-1 mx-md-2 my-2" style={{minWidth: "312px"}}>
                                <div className="border border-1 rounded-3 mb-3">
                                    <div className="p-3">
                                        <h6 className="heading text-basic mb-0">Details</h6>
                                    </div>

                                    <div className="divider2"></div>

                                    <div className="p-4 mt-1 mb-01">
                                        <div className="d-flex">
                                            <div className="w-50">
                                                <p className="mb-0 text-hint caption"><RiCalendarTodoLine className="fs-6 me-1" />Start Date</p>
                                                <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>14 May / 10:35 AM</p>
                                            </div>
                                            <div className="w-50" style={{paddingLeft: "6px"}}>
                                                <p className="mb-0 text-hint caption"><RiCalendarTodoLine className="fs-6 me-1" />End Date</p>
                                                <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>14 May / 10:35 AM</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div className="w-50">
                                                <p className="mb-0 text-hint caption"><RiTruckLine className="fs-6 me-1" />Distance Covered</p>
                                                <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>2456 km</p>
                                            </div>
                                            <div className="w-50" style={{paddingLeft: "6px"}}>
                                                <p className="mb-0 text-hint caption"><BsPerson className="fs-6 me-1" />Driver</p>
                                                <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>John Doe</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <div className="d-flex info px-2 mb-2">
                                            <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                                <div className="d-flex">
                                                    <AiOutlinePieChart className="me-1 text-hint" />
                                                    <span className="text text-hint caption">Avg. Fuel Consumption</span>
                                                </div>
                                                <span className="pt-1 text-basic subtitle-2">25L/100kmh</span>
                                            </div>
                                            <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                                <div className="d-flex">
                                                    <IoFlashOutline className="me-1 text-hint" />
                                                    <span className="text text-hint caption">Average Speed</span>
                                                </div>
                                                <span className="pt-1 text-basic subtitle-2">100kmh</span>
                                            </div>
                                        </div>
                                        <div className="d-flex info px-2 mb-2">
                                            <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                                <div className="d-flex">
                                                    <AiOutlinePieChart className="me-1 text-hint" />
                                                    <span className="text text-hint caption">Avg. Fuel Consumption</span>
                                                </div>
                                                <span className="pt-1 text-basic subtitle-2">25L/100kmh</span>
                                            </div>
                                            <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                                <div className="d-flex">
                                                    <IoFlashOutline className="me-1 text-hint" />
                                                    <span className="text text-hint caption">Average Speed</span>
                                                </div>
                                                <span className="pt-1 text-basic subtitle-2">100kmh</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-1 rounded-3">
                                    <div className="p-3">
                                        <h6 className="heading text-basic mb-0">Events</h6>
                                    </div>

                                    <div className="divider2"></div>

                                    <div className="p-2">
                                        <div className="d-flex info px-2 pt-2 mt-1">
                                            <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                                <div className="d-flex">
                                                    <IoAlertCircleOutline className="me-1 text-hint" />
                                                    <span className="text-hint caption">Number of Errors</span>
                                                </div>
                                                <span className="pt-1 text-basic subtitle-2">2</span>
                                            </div>
                                            <div className="p-3 w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center mx-1">
                                                <div className="d-flex">
                                                    <RiAlertLine className="me-1 text-hint" />
                                                    <span className="text-hint caption">Number of warnings</span>
                                                </div>
                                                <span className="pt-1 text-basic subtitle-2">3</span>
                                            </div>
                                        </div>

                                        <div className="pt-2 px-3 mt-1">
                                            <div className="d-flex py-2 trip-detail-card">
                                                <div className="px-3 trip-detail-card-icon">
                                                    <RiMapPinFill className="fs-5 text-danger"/>
                                                </div>
                                                <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                    <span className="text-danger caption-2">Error</span>
                                                    <span className="text-danger caption">Error text</span>
                                                </div>
                                            </div>
                                            <div className="d-flex py-2 trip-detail-card">
                                                <div className="px-3 trip-detail-card-icon">
                                                    <RiMapPinFill className="fs-5 text-warning"/>
                                                </div>
                                                <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                    <span className="text-warning caption-2">Warning</span>
                                                    <span className="text-warning caption">warning</span>
                                                </div>
                                            </div>
                                            <div className="d-flex py-2 trip-detail-card">
                                                <div className="px-3 trip-detail-card-icon">
                                                    <RiMapPinFill className="fs-5 text-info"/>
                                                </div>
                                                <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                    <span className="text-info caption-2">Info</span>
                                                    <span className="text-info caption">Info text</span>
                                                </div>
                                            </div>
                                            <div className="d-flex py-2 trip-detail-card">
                                                <div className="px-3 trip-detail-card-icon">
                                                    <RiMapPinFill className="fs-5 text-success"/>
                                                </div>
                                                <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                                                    <span className="text-success caption-2">Success</span>
                                                    <span className="text-success caption">Success text</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
 }
 
 export default TripTabs;