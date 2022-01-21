import { IoMdClose } from 'react-icons/io';

import { Trip } from "~/components/features/common";
import { GoAlert } from 'react-icons/go';

export type TripDetailsProps = {
    trip: Trip;
    id: number;
    handleActiveVehicleId: (id: number) => void;
};

const TripDetails = ({trip, handleActiveVehicleId, id}: TripDetailsProps) => {
    return (
        <>
            <div className="trip-details">
                <div className="d-flex align-items-center justify-content-between p-3">
                    <h6 className="heading text-basic mb-0">Trip Details</h6>
                    <span onClick={() => handleActiveVehicleId(-1)} className="d-flex align-items-center">
                        <IoMdClose />
                    </span>
                </div>
                
                <div className="divider2"></div>

                <div className="d-flex justify-content-between ps-3 pe-2 py-2 mt-1 me-1">
                    <div className="">
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

                <div className="">            
                    <div className="space space-component22">
                        <div className="space space-component14">
                            <div className="space space-component10">
                                <div className="space space-component8">
                                    <span className="text3 text-hint caption">Start Date</span>
                                </div>
                                <div className="space space-component9">
                                    <span className="text4 text-basic subtitle-2">14 May / 10:35 AM</span>
                                </div>
                            </div>
                            <div className="space space-component13">
                                <div className="space space-component11">
                                    <span className="text5 text-hint caption">Duration</span>
                                </div>
                                <div className="space space-component12">
                                    <span className="text6 text-basic subtitle-2">h</span>
                                </div>
                            </div>
                        </div>
                        <div className="space space-component21">
                            <div className="space space-component17">
                                <div className="space space-component15">
                                    <span className="text7 text-hint caption">Distance Covered</span>
                                </div>
                                <div className="space space-component16">
                                    <span className="text8 text-basic subtitle-2">km</span>
                                </div>
                            </div>
                            <div className="space space-component20">
                                <div className="space space-component18">
                                    <span className="text9 text-hint caption">Driver</span>
                                </div>
                                <div className="space space-component19">
                                    <span className="text10 text-basic subtitle-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divider2"></div>

                    <div className="space space-component25">
                        <div className="space space-component23">
                        </div>
                        <div className="space space-component24">
                        </div>
                    </div>
                </div>

                <div className="divider3"></div>

                <div className="space space-component29">
                    <div className="space space-component27">
                    </div>
                    <div className="space space-component28">
                        <label className="text11 text-hint label">DEPARTURE</label>
                        <span className="text12 text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                        <span className="text13 text-hint caption">14 May, 16:00 PM</span>
                    </div>
                </div>

                <div className="space space-component36">
                    <div className="space space-component30">
                    </div>
                    <div className="space space-component35">
                        <div className="space space-component33">
                            <div className="space space-component31">
                                <label className="text14 text-hint label">STOP</label>
                            </div>
                            <div className="space space-component32">
                                <span className="text15 text-danger caption">Long Idle Time</span>
                            </div>
                        </div>
                        <div className="space space-component34">
                            <span className="text16 text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                            <span className="text17 text-hint caption">14 May, 16:00 PM</span>
                        </div>
                    </div>
                </div>
                <div className="space space-component39">
                    <div className="space space-component37">
                    </div>
                    <div className="space space-component38">
                        <label className="text18 text-hint label">STOP</label>
                        <span className="text19 text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                        <span className="text20 text-hint caption">14 May, 16:00 PM</span>
                    </div>
                </div>
                <div className="space space-component42">
                    <div className="space space-component40">
                    </div>
                    <div className="space space-component41">
                        <label className="text21 text-hint label">DEPARTURE</label>
                        <span className="text22 text-basic subtitle">Blvd Ne, Albuquerenqie, NM</span>
                        <span className="text23 text-hint caption">14 May, 16:00 PM</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TripDetails;
