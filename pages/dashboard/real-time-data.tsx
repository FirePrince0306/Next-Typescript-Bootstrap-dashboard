import Image from 'next/image';

import Indicator from '~/pages/dashboard/shared/indicator';
import Expenses from '~/pages/dashboard/shared/expenses';
import VehicleCondition from '~/pages/dashboard/shared/vehicle-condition';
import TripsChart from '~/pages/dashboard/shared/trips-chart';
import SafeChart from '~/pages/dashboard/shared/safe-chart';

import { AiOutlineExpandAlt, AiOutlineSetting } from 'react-icons/ai';
import { RiCalendarTodoLine, RiLayoutFill, RiMapPinFill, RiBroadcastLine } from 'react-icons/ri';
import { GoClock, GoCircleSlash } from 'react-icons/go';
import { FaTruck, FaAngleRight } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';

const RealTimeData = () => {
    return (
        <div className="real-time-data bg-grey">
            <div className="d-flex justify-content-between align-items-center bg-default flex-md-row flex-column">
                <div className="d-flex align-items-center flex-md-row flex-column">
                    <h5 className="heading text-basic mb-0 p-3 mx-1">Real Time Data</h5>
                    <div className="divider d-none d-md-block"></div>
                    <div className="mb-3 mb-md-0 me-4 me-md-0">
                        <RiCalendarTodoLine className="fs-5 basic ms-4" style={{marginRight: "11px"}} />
                        <span className="text text-basic subtitle-2">{new Date().toLocaleDateString()}</span>
                        <GoClock className="fs-5 basic" style={{marginLeft: "18px", marginRight: "10px"}}  />
                        <span className="text1 text-basic subtitle-2">{new Date().toLocaleTimeString()}</span>
                    </div>
                </div>

                <div className="d-flex mb-md-0 mb-2">
                    <button className="d-flex align-items-center button size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold me-2">
                        <RiLayoutFill className="fs-5 me-2 pe-1" /><span>widgets</span>
                    </button>
                    <button className="button1 size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold fs-5 me-0 me-md-3">
                        <AiOutlineExpandAlt /><span className="d-none">Button</span>
                    </button>
                </div>
            </div>

            <div className="indicators d-flex flex-column flex-md-row justify-content-between w-100 pt-3 px-2 pb-2">
                <Indicator val={5} label={"Vehicles with Errors"} type={"critical"} adClass={"mx-2 my-0 w-md-100 w-auto"} />
                <Indicator val={14} label={"Vehicles with Warnings"} type={"warning"} adClass={"mx-2 my-0 w-md-100 w-auto"} />
                <Indicator val={4} label={"Deviation from a Route"} type={"critical"} adClass={"mx-2 my-0 w-md-100 w-auto"} />
                <Indicator val={34} label={"Being Late"} type={"warning"} adClass={"mx-2 my-0 w-md-100 w-auto"} />
            </div>

            <div className="d-xxl-flex px-2">
                <div className="d-lg-flex expenses-vehicle">
                    <Expenses />
                    <VehicleCondition />
                </div>
                <div className="flex-grow-1 d-block d-md-flex d-xxl-block">
                    <div className="m-2 p-4 bg-white border border-1 rounded-3 traffic-jam">
                        <div className="d-flex align-items-center justify-content-between">
                            <h6 className="heading text-basic mb-0">Traffic Jam</h6>
                            <button className="button size-xl-tiny appearance-outline size-medium status-basic shape-rectangle icon-start transitions">
                                <FaTruck />
                                <span className="d-none">Button</span>
                            </button>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="me-1">
                                <h5 className="heading1 text-basic mb-0">16</h5>
                                <span className="text text-hint caption">Vehicles</span>
                            </div>
                            <div className="w-100 mt-3 mb-1">
                                <div className="d-flex justify-content-between align-items-center mt-05 mb-05 px-2">
                                    <div className="d-flex align-items-center">
                                        <FaTruck className="text-basic me-1" />
                                        <p className="text-basic paragraph-2 mb-0">5</p>
                                    </div>
                                    <span className="text-danger caption-2">&gt; 3h</span>
                                </div>
                                <div className="divider2"></div>
                                <div className="d-flex justify-content-between align-items-center mt-05 mb-05 px-2">
                                    <div className="d-flex align-items-center">
                                        <FaTruck className="text-basic me-1" />
                                        <p className="text-basic paragraph-2 mb-0">8</p>
                                    </div>
                                    <span className="text-danger caption-2">&gt; 1h</span>
                                </div>
                                <div className="divider2"></div>
                                <div className="d-flex justify-content-between align-items-center mt-05 mb-05 px-2">
                                    <div className="d-flex align-items-center">
                                        <FaTruck className="text-basic me-1" />
                                        <p className="text-basic paragraph-2 mb-0">3</p>
                                    </div>
                                    <span className="text-hint caption-2">&gt; 20 min</span>
                                </div>
                                <div className="divider2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-xxl-3 m-2 p-4 bg-white border border-1 rounded-3 accidents">
                        <div className="d-flex align-items-center justify-content-between">
                            <h6 className="heading text-basic mb-0">Accidents</h6>
                            <button className="button size-xl-tiny appearance-outline size-medium status-basic shape-rectangle icon-start transitions">
                                <FaTruck />
                                <span className="d-none">Button</span>
                            </button>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-1">
                                <h5 className="heading1 text-basic mb-0">6</h5>
                                <span className="text text-hint caption">Vehicles</span>
                            </div>
                            <div className="w-100 mt-3 mb-1">
                                <div className="d-flex justify-content-between align-items-center mt-05 mb-05 px-2">
                                    <div className="d-flex align-items-center text-danger">
                                        <FaTruck className="me-1" />
                                        <p className="text-danger paragraph-2 mb-0">2</p>
                                    </div>
                                    <span className="text-danger caption-2">Evacuation Requred</span>
                                </div>
                                <div className="divider2"></div>
                                <div className="d-flex justify-content-between align-items-center mt-05 mb-05 px-2">
                                    <div className="d-flex align-items-center">
                                        <FaTruck className="text-basic me-1" />
                                        <p className="text-basic paragraph-2 mb-0">4</p>
                                    </div>
                                    <span className="caption-2">Evacuated</span>
                                </div>
                                <div className="divider2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-lg-flex px-2">
                <div className="m-2 p-4 bg-white border border-1 rounded-3 warning">
                    <h6 className="heading text-basic mb-1">Warnings</h6>
                    <p className="text text-hint paragraph-2">Driving Policy Violations</p>
                    <div className="d-flex py-3 py-lg-0">
                        <div className="warning-left">
                            <div className="d-flex align-items-center justify-content-between pt-10 pb-10">
                                <div>
                                    <RiMapPinFill className="text-success me-1" />
                                    <span className="text-hint subtitle fw-normal">Driving</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="text-danger subtitle custom-warning-button">2</span>
                                    <FaAngleRight className="text-hint ms-1" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between pt-10 pb-10">
                                <div>
                                    <RiMapPinFill className="text-warning me-1" />
                                    <span className="text-hint subtitle fw-normal">Parked</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="text-danger subtitle custom-warning-button">1</span>
                                    <FaAngleRight className="text-hint ms-1" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between pt-10 pb-10">
                                <div>
                                    <RiMapPinFill className="text-warning me-1" />
                                    <span className="text-hint subtitle fw-normal">Idling</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="subtitle custom-warning-button">0</span>
                                    <FaAngleRight className="text-hint ms-1" />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between pt-10 pb-10">
                                <div>
                                    <RiMapPinFill className="text-danger me-1" />
                                    <span className="text-hint subtitle fw-normal">Broken</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="text-danger subtitle custom-warning-button">3</span>
                                    <FaAngleRight className="text-hint ms-1" />
                                </div>
                            </div>
                        </div>
                        <div className="divider3 mx-3"></div>
                        <div className="warning-right">
                            <div className="d-flex justify-content-between custom-warning-card mb-05">
                                <div>
                                    <p className="text-danger paragraph-2 mb-0">Driving Time Exceeded</p>
                                    <span className="text-danger caption">WO-13245</span>
                                </div>
                                <span className="text-danger caption w-50 text-end">&gt; 2 hours</span>
                            </div>
                            <div className="d-flex justify-content-between custom-warning-card">
                                <div>
                                    <p className="text-danger paragraph-2 mb-0">Driving Time Exceeded</p>
                                    <span className="text-danger caption">WO-13245</span>
                                </div>
                                <span className="text-danger caption w-50 text-end">&gt; 2 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex trips-per-trips">
                    <div className="m-2 p-4 bg-white border border-1 rounded-3 trips w-100 w-md-50">
                        <h6 className="heading text-basic mb-1">Trips</h6>
                        <p className="text text-hint paragraph-2">24 hours Trips Data</p>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <RiBroadcastLine className="me-1" />
                                <span className="text-hint subtitle-2">Live Trips</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">156</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <RiBroadcastLine className="me-1 text-info" />
                                <span className="text-hint subtitle-2">Scheduled</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">158</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <RiBroadcastLine className="me-1 text-success" />
                                <span className="text-hint subtitle-2">Completed</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">256</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <RiBroadcastLine className="me-1 text-warning" />
                                <span className="text-hint subtitle-2">Being Late</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">15</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <RiBroadcastLine className="me-1 text-danger" />
                                <span className="text-hint subtitle-2">Failed</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">2</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2 mb-4"></div>
                    </div>

                    <div className="m-2 p-4 bg-white border border-1 rounded-3 trips-per w-100 w-md-50">
                        <h6 className="heading text-basic">Trips Performance</h6>
                        <div className="mt-4 pt-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column">
                                    <span className="text-basic subtitle">158</span>
                                    <span className="text-hint caption">Planned for today</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="text-basic subtitle">23</span>
                                    <span className="text-hint caption">left</span>
                                </div>
                            </div>
                            <div className="trips-chart">
                                <TripsChart />
                            </div>
                            <div className="d-flex mt-4 pt-1">
                                <div className="d-flex flex-column w-50">
                                    <span className="text-primary subtitle-2">40% / 158</span>
                                    <span className="text-hint caption">Live Trips</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <span className="text-success subtitle-2">20% / 158</span>
                                    <span className="text-hint caption">Completed</span>
                                </div>
                            </div>
                            <div className="d-flex mt-3 pt-1">
                                <div className="d-flex flex-column w-50">
                                    <span className="text-warning subtitle-2">10% / 158</span>
                                    <span className="text-hint caption">Being Late</span>
                                </div>
                                <div className="d-flex flex-column w-50">
                                    <span className="text-danger subtitle-2">5% / 158</span>
                                    <span className="text-hint caption">Failed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-lg-flex px-2 pb-2">
                <div className="d-md-flex out-safe">
                    <div className="m-2 p-4 bg-white border border-1 rounded-3 out-of-service w-100 w-md-50">
                        <h6 className="heading text-basic mb-1">Out Of Service</h6>
                        <p className="text text-hint paragraph-2">Out of order vehicles</p>
                        <div className="mb-3">
                            <h5 className="heading1 text-basic mb-0">25</h5>
                            <p className="text1 text-hint paragraph-2">Vehicles Total</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <AiOutlineSetting className="me-1 text-hint" />
                                <span className="text-hint subtitle-2">Maintenance</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">15</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <GoCircleSlash className="me-1 text-hint" />
                                <span className="text-hint subtitle-2">Broken</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">7</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div>
                                <MdOutlineErrorOutline className="me-1 text-hint" />
                                <span className="text-hint subtitle-2">In Accident</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="text-basic subtitle">2</span>
                                <FaAngleRight className="text-hint ms-1" />
                            </div>
                        </div>
                        <div className="divider2"></div>
                    </div>

                    <div className="m-2 p-4 bg-white border border-1 rounded-3 safe-driving w-100 w-md-50">
                        <h6 className="heading text-basic">Safe Driving Meter</h6>
                        <div className="mt-4 pt-3 safe-chart">
                            <SafeChart />
                        </div>
                    </div>
                </div>

                <div className="m-2 d-flex bg-white border border-1 rounded-3 criticals flex-grow-1">
                    <div className="w-50">
                        <div className="critical-card">
                            <div className="d-flex mb-10">
                                <div className="critical-card-icon d-flex align-items-center justify-content-center me-10">
                                    <Image className="image" src={require('~/public/images/gas@3x-red.svg').default.src} width="24" height="30" alt="icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="heading text-danger mb-0">5</h5>
                                    <span className="text text-hint caption-2">Vehicles</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="text-basic mb-0">Fuel Consumption</p>
                                <span className="text-hint caption">&gt; 30L / 100km</span>
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="critical-card">
                            <div className="d-flex mb-10">
                                <div className="critical-card-icon d-flex align-items-center justify-content-center me-10">
                                    <Image className="image" src={require('~/public/images/speed@3x-red.svg').default.src} width="24" height="30" alt="icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="heading1 text-danger mb-0">3</h5>
                                    <span className="text-hint caption-2">Vehicles</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="text-basic mb-0">Speed</p>
                                <span className="text-hint caption">&gt; 130km / h</span>
                            </div>
                        </div>
                    </div>
                    <div className="divider3"></div>
                    <div className="w-50">
                        <div className="critical-card">
                            <div className="d-flex mb-10">
                                <div className="critical-card-icon d-flex align-items-center justify-content-center me-10">
                                    <Image className="image" src={require('~/public/images/filter@3x-red.svg').default.src} width="24" height="30" alt="icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="heading2 text-danger mb-0">10</h5>
                                    <span className="text-hint caption-2">Vehicles</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="text-basic mb-0">CO2 Emission</p>
                                <span className="text-hint caption">&gt; 450g/km</span>
                            </div>
                        </div>
                        <div className="divider2"></div>
                        <div className="critical-card">
                            <div className="d-flex mb-10">
                                <div className="critical-card-icon d-flex align-items-center justify-content-center me-10">
                                    <Image className="image" src={require('~/public/images/motor@3x-red.svg').default.src} width="24" height="30" alt="icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="heading3 text-danger mb-0">1</h5>
                                    <span className="text-hint caption-2">Vehicles</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="text-basic mb-0">Oil Temperature</p>
                                <span className="text-hint caption">&gt; 120C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RealTimeData;
