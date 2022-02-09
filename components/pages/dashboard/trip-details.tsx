import Image from 'next/image';

import { Trip } from "~/components/features/common";

import { GoAlert, GoClock } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { RiCalendarTodoLine, RiTruckLine, RiMapPinFill } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

import { TripsService } from '~/components/utils/trips.service';

export type TripDetailsProps = {
    trip: Trip;
    handleActiveVehicleId: (id: number) => void;
    handleMarkers: (markers: any) => void;
};

const TripDetails: React.FC<TripDetailsProps> = ({trip, handleActiveVehicleId, handleMarkers}) => {
    let MyTripsService:TripsService = new TripsService();
	let tempMarkers = MyTripsService.getMarkersData();

    return (
        <>
            <div className="trip-details">
                <div className="d-flex align-items-center justify-content-between p-3">
                    <h6 className="heading text-basic mb-0">Trip Details</h6>
                    <span onClick={() => {handleActiveVehicleId(-1); handleMarkers(tempMarkers)}} className="d-flex align-items-center">
                        <IoMdClose />
                    </span>
                </div>
                
                <div className="divider2"></div>

                <div className="d-flex justify-content-between flex-wrap ps-3 pe-2 py-2 mt-1 me-1">
                    <div>
                        <span className="text text-basic subtitle">{trip.vehicle.name}</span>
                        <div className="lh-8">
                            <span className="text-hint caption-2 me-2">{trip.vehicle.vin}</span>
                            <span className="text-primary caption-2">{trip.vehicleInTripStatus.toUpperCase()}</span>
                        </div>
                    </div>
                    <button className="d-flex align-items-center button size-xl-small appearance-outline status-danger shape-rectangle transitions text-uppercase" style={{marginTop: "2px", height: "32px"}}>
                        <GoAlert className="text-danger" /><span className="ms-1 ps-2 d-inline-block">errors</span>
                    </button>
                </div>

                <div className="divider2"></div>

                <div className="p-3 mt-1 mb-01">
                    <div className="d-flex">
                        <div className="w-50">
                            <p className="mb-0 text-hint caption"><RiCalendarTodoLine className="fs-6 me-1" />Start Date</p>
                            <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>14 May / 10:35 AM</p>
                        </div>
                        <div className="w-50" style={{paddingLeft: "6px"}}>
                            <p className="mb-0 text-hint caption"><GoClock className="fs-6 me-1" />Duration</p>
                            <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>{trip.duration}h</p>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div className="w-50">
                            <p className="mb-0 text-hint caption"><RiTruckLine className="fs-6 me-1" />Distance Covered</p>
                            <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>{trip.coveredDistance}km</p>
                        </div>
                        <div className="w-50" style={{paddingLeft: "6px"}}>
                            <p className="mb-0 text-hint caption"><BsPerson className="fs-6 me-1" />Driver</p>
                            <p className="mb-0 text-basic subtitle-2" style={{paddingTop: "1px"}}>{trip && trip.vehicle && trip.vehicle.assignedDrivers && trip.vehicle.assignedDrivers[0].driver.name + ' ' + trip.vehicle.assignedDrivers[0].driver.surname}</p>
                        </div>
                    </div>
                </div>

                <div className="divider2"></div>
                
                <div className="d-flex info">
                    <div className="w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex">
                            <Image className="image me-1" src={require('~/public/images/fuel@3x.svg').default.src} width="14" height="14" alt="icon" />
                            <span className="text text-hint caption">Fuel Consumption</span>
                        </div>
                        <span className="pt-1 text-basic subtitle-2">15L / 100km</span>
                    </div>
                    <div className="w-50 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex">
                            <Image className="image me-1" src={require('~/public/images/speed-1@3x.svg').default.src} width="14" height="14" alt="icon" />
                            <span className="text text-hint caption">Average Speed</span>
                        </div>
                        <span className="pt-1 text-basic subtitle-2">100kmh</span>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="pt-2 px-3 mt-1">
                    <div className="d-flex align-items-center py-2 my-1 trip-detail-card">
                        <div className="px-3 trip-detail-card-icon">
                            <RiMapPinFill className="fs-5 text-primary"/>
                        </div>
                        <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                            <label className="text-hint label">DEPARTURE</label>
                            <span className="text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                            <span className="text-hint caption">14 May, 16:00 PM</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2 trip-detail-card">
                        <div className="px-3 trip-detail-card-icon">
                            <RiMapPinFill className="fs-5 text-danger"/>
                        </div>
                        <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <label className="text-hint label">STOP</label>
                                <span className="text-danger caption"><GoAlert className="text-danger me-1" />Long Idle Time</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                                <span className="text-hint caption">14 May, 16:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2 trip-detail-card">
                        <div className="px-3 trip-detail-card-icon">
                            <RiMapPinFill className="fs-5 text-warning"/>
                        </div>
                        <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                            <label className="text-hint label">STOP</label>
                            <span className="text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                            <span className="text20 text-hint caption">14 May, 16:00 PM</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2 trip-detail-card">
                        <div className="px-3 trip-detail-card-icon">
                            <RiMapPinFill className="fs-5 text-primary"/>
                        </div>
                        <div className="d-flex flex-column trip-detail-card-content mb-1 w-100">
                            <label className="text21 text-hint label">DEPARTURE</label>
                            <span className="text22 text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                            <span className="text23 text-hint caption">14 May, 16:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TripDetails;
