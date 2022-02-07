import { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { HiCreditCard } from 'react-icons/hi';
import { ImPriceTag } from 'react-icons/im';
import { RiCalendarTodoLine, RiMapPinLine, RiStarLine } from 'react-icons/ri';
import { GoClock } from 'react-icons/go';

const options1 = [
    { value: '1-am', label: '1 AM' },
    { value: '2-am', label: '2 AM' },
    { value: '3-am', label: '3 AM' },
    { value: '4-am', label: '4 AM' },
    { value: '5-am', label: '5 AM' },
    { value: '6-am', label: '6 AM' },
    { value: '7-am', label: '7 AM' },
    { value: '8-am', label: '8 AM' },
    { value: '9-am', label: '9 AM' },
    { value: '10-am', label: '10 AM' },
    { value: '11-am', label: '11 AM' },
    { value: '12-pm', label: '12 AM' },
    { value: '1-pm', label: '1 AM' },
    { value: '2-pm', label: '2 AM' },
    { value: '3-pm', label: '3 AM' },
    { value: '4-pm', label: '4 AM' },
    { value: '5-pm', label: '5 AM' },
    { value: '6-pm', label: '6 AM' },
    { value: '7-pm', label: '7 AM' },
    { value: '8-pm', label: '8 AM' },
    { value: '9-pm', label: '9 AM' },
    { value: '10-pm', label: '10 AM' },
    { value: '11-pm', label: '11 AM' }
]

const options2 =  [
    { value: 'gas', label: 'Gas' },
    { value: 'oil', label: 'Oil' }
]

const options3 =  [
    { value: 'aa1235', label: 'AA 1235' },
    { value: 'bb2515', label: 'BB 2515' }
]

const SchedultTrip = () => {
    const [isChecked, setIsChecked]=useState(false);

    function datePickHandler(): void {}

    function checkHandler(): void {}

    function radioChangeHandler(): void {}

    return (
        <div className="schedule-trip bg-grey">
            <div className="d-flex align-items-center justify-content-between p-3 bg-white">
                <h5 className="heading text-basic mb-0">New Trip</h5>
            </div>
            <div className="divider2"></div>
            
            <div className="p-3 d-md-flex">
                <div className="border border-1 rounded-3 bg-white trip-parameter mb-3 mb-md-0">
                    <div className="d-flex align-items-center p-3 m-1">
                        <FaTruck className="text-hint me-1 fs-4" />
                        <h6 className="heading text-basic mb-0">Trip Parameters</h6>
                    </div>

                    <div className="divider2"></div>

                    <div className="p-3 m-1">
                        <h6 className="text-hint">1. DATES</h6>
                        <div className="d-flex mt-3">
                            <div className="w-50 me-3">
                                <label className="text-hint label">START DATE</label>
                                
                                <DatePicker
                                    className="input status-basic border-1 rounded-3 py-2 px-3 w-100"
                                    placeholderText="Enter Date"
                                    readOnly={false}
                                    onChange={datePickHandler}
                                />
                            </div>

                            <div className="w-50">
                                <label className="text-disabled label">END  DATE</label>
                                
                                <DatePicker
                                    className="input status-basic border-1 rounded-3 py-2 px-3 w-100"
                                    placeholderText="Enter Date"
                                    readOnly={false}
                                    onChange={datePickHandler}
                                />                              
                            </div>
                        </div>
                        <div className="d-flex my-4 pb-3">
                            <div className="w-50 me-3">
                                <label className="text-hint label">START TIME</label>
                                
                                <Select
                                    className="select-count mb-3 mb-md-0 status-basic"
                                    options={options1}
                                    isSearchable={true}
                                    id="time-selector"
                                    instanceId="time-selector"
                                    inputId="time-selector"
                                    placeholder="Select Time"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                            </div>
                            <div className="w-50">
                                <label className="text-disabled label">END TIME</label>
                                
                                <Select
                                    className="select-count mb-3 mb-md-0 status-basic"
                                    options={options1}
                                    isSearchable={true}
                                    id="time-selector-2"
                                    instanceId="time-selector-2"
                                    inputId="time-selector-2"
                                    placeholder="Select Time"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                            </div>
                        </div>

                        <h6 className="heading3 text-hint">2. CARGO&ROUTE</h6>
                        <div className="d-flex mt-3">
                            <div className="w-50 me-3">
                                <label className="text-hint label">TYPE OF CARGO</label>
                                
                                <Select
                                    className="select-count mb-3 mb-md-0 status-basic"
                                    options={options2}
                                    isSearchable={true}
                                    id="cargo-selector"
                                    instanceId="cargo-selector"
                                    inputId="cargo-selector"
                                    placeholder=""
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />
                            </div>
                            <div className="w-50"></div>
                        </div>
                        <div className="d-flex my-4 pb-3">
                            <div className="d-flex flex-column w-50 me-3">
                                <label className="text-hint label">DEPARTURE CITY</label>
                                <input type="text" className="select2 size-xl-medium status-basic border-1 rounded-3 w-100" />
                            </div>
                            <div className="d-flex flex-column w-50">
                                <label className="text-hint label">ARRIVAL CITY</label>
                                <input type="text" className="select2 size-xl-medium status-basic border-1 rounded-3 w-100" />
                            </div>
                        </div>
                        
                        <h6 className="heading5 text-hint">3. VEHICLE</h6>
                        <div className="d-flex mt-3">
                            <div className="w-50 me-3">
                                <label className="text-hint label">VEHICLE TYPE</label>
                                
                                <div className="custom_radio">
                                    <input type="radio" id="truck" name="custom-radio" onChange={radioChangeHandler}/>
                                    <label htmlFor="truck" className="text-basic label">Truck</label>
                                    <br />
                                    <input type="radio" id="van" name="custom-radio" onChange={radioChangeHandler}/>
                                    <label htmlFor="van" className="text-basic label">Van</label>
                                    <br />
                                    <input type="radio" id="car" name="custom-radio" onChange={radioChangeHandler}/>
                                    <label htmlFor="car" className="text-basic label">Car</label>
                                </div>
                            </div>
                            <div className="w-50">
                                <label className="text-hint label">SELECT VEHICLE</label>
                               
                                <Select
                                    className="select-count mb-3 mb-md-0 status-basic"
                                    options={options3}
                                    isSearchable={true}
                                    id="vehicle-selector"
                                    instanceId="vehicle-selector"
                                    inputId="vehicle-selector"
                                    placeholder="select"
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}
                                />

                                <div className="checkbox d-flex align-items-center mt-4" onClick={()=>{setIsChecked(!isChecked)}}>
                                    <input style={{float: 'left', borderColor: 'red', border: '3px'}} className="w-100" type="checkbox" checked={isChecked} onChange={checkHandler}/>
                                    <span className="wrapper me-2">
                                        <AiOutlineCheck className="text-white" />
                                    </span>
                                    <span className="text-basic label">Only Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divider2"></div>
                    
                    <div className="d-flex p-3 justify-content-end">
                        <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold me-3">
                            <IoMdClose className="me-2" />
                            <span>cancel</span>
                        </button>
                        <button className="button1 size-xl-medium appearance-filled size-medium status-primary shape-rectangle icon-start transitions fw-bold">
                            <HiCreditCard className="me-2" />
                            <span>calculate</span>
                        </button>
                    </div>
                </div>

                <div className="border border-1 rounded-3 bg-white ms-md-3 ms-0 trip-cost">
                    <div className="d-flex align-items-center p-3 m-1">
                        <ImPriceTag className="text-hint me-2 fs-4" />
                        <h6 className="heading text-basic mb-0">Trip Cost</h6>
                    </div>

                    <div className="divider2"></div>

                    <div className="px-4 py-3">
                        <div className="d-flex my-2">
                            <div className="me-2">
                                <RiCalendarTodoLine className="text-hint" />
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-hint subtitle">Dates</span>
                                <span className="text-basic subtitle">May 14, 2020 17:00PM - May 17, 2020 13:00PM</span>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <div className="me-2">
                                <GoClock className="text-hint" />
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-hint subtitle">Trip Time</span>
                                <span className="text-basic subtitle">4d 3h</span>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <div className="me-2">
                                <RiMapPinLine className="text-hint" />
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-hint subtitle">Distance</span>
                                <span className="text-basic subtitle">6783km</span>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <div className="me-2">
                                <RiStarLine className="text-hint" />
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-hint subtitle">Fuel Consimption</span>
                                <span className="text-basic subtitle">6783L</span>
                            </div>
                        </div>
                        <div className="border border-1 rounded-3 p-3 d-flex justify-content-between">
                            <span className="text-primary subtitle-2">Approx.Cost</span>
                            <h5 className="heading text-primary mb-0">$1241.14</h5>
                        </div>
                    </div>

                    <div className="divider2"></div>
                    
                    <div className="d-flex p-3 justify-content-end">
                        <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold me-3">
                            <IoMdClose className="me-2" />
                            <span>cancel</span>
                        </button>
                        <button className="button1 size-xl-medium appearance-filled size-medium status-primary shape-rectangle icon-start transitions fw-bold">
                            <RiCalendarTodoLine className="me-2" />
                            <span>Schedule Trip</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SchedultTrip;