import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { AiOutlineCheck, AiOutlineExpandAlt } from 'react-icons/ai';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';

import MaintenanceVisit from './shared/maintenance-visit';

const MaintenancePlanner = () => {
    const [isChecked1, setIsChecked1]=useState(false);
    const [isChecked2, setIsChecked2]=useState(false);
    const [isChecked3, setIsChecked3]=useState(false);
    const [isChecked4, setIsChecked4]=useState(false);
    const [startDate, setStartDate] = useState(new Date());

    function checkHandler(): void {

    }

    return (
        <div className="schedule-trip bg-grey maintenance-planner">
            <div className="d-flex align-items-center justify-content-between p-3 bg-white">
                <h5 className="text-basic mb-0">Maintenance Planner</h5>
            </div>
            <div className="divider2"></div>
            
            <div className="d-flex">
                <div className="bg-white maintenance-date">
                    <div className="d-flex justify-content-between align-items-center p-3">
                        <h6 className="text-basic mb-0">Date</h6>
                        <IoMdClose />
                    </div>

                    <div className="divider2"></div>

                    <div className="p-3">
                        <DatePicker
                            selected={startDate}
                            className="w-100"
                            onChange={(date) => date && setStartDate(date)}
                            inline
                        />
                    </div>

                    <div className="divider2"></div>

                    <div className="p-3">
                        <span className="text-basic subtitle">Maintenance</span>

                        <div className="checkbox d-flex align-items-center mt-3" onClick={()=>{setIsChecked1(!isChecked1)}}>
                            <input className="w-100" type="checkbox" checked={isChecked1} onChange={checkHandler}/>
                            <span className="wrapper me-2">
                                <AiOutlineCheck className="text-white" />
                            </span>
                            <span className="text-basic label">Regular Inspection</span>
                        </div>

                        <div className="checkbox d-flex align-items-center mt-2 mb-4" onClick={()=>{setIsChecked2(!isChecked2)}}>
                            <input className="w-100" type="checkbox" checked={isChecked2} onChange={checkHandler}/>
                            <span className="wrapper border-warning me-2">
                                <AiOutlineCheck className="text-white" />
                            </span>
                            <span className="text-basic label">Unscheduled Inspection</span>
                        </div>

                        <span className="text-basic subtitle">Workshops</span>

                        <div className="checkbox d-flex align-items-center mt-3" onClick={()=>{setIsChecked3(!isChecked3)}}>
                            <input className="w-100" type="checkbox" checked={isChecked3} onChange={checkHandler}/>
                            <span className="wrapper me-2">
                                <AiOutlineCheck className="text-white" />
                            </span>
                            <span className="text-basic label">Workshop A</span>
                        </div>

                        <div className="checkbox d-flex align-items-center mt-2" onClick={()=>{setIsChecked4(!isChecked4)}}>
                            <input className="w-100" type="checkbox" checked={isChecked4} onChange={checkHandler}/>
                            <span className="wrapper me-2">
                                <AiOutlineCheck className="text-white" />
                            </span>
                            <span className="text-basic label">Workshop B</span>
                        </div>
                    </div>                    
                </div>

                <div className="p-3 maintenance-schedule">
                    <div className="border border-1 rounded-3 bg-white mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <div className="d-flex align-items-center">
                                <h6 className="text-basic mb-0 me-3">March 30</h6>
                                <button className="button appearance-filled size-medium status-basic shape-rectangle transitions px-3 py-2 me-2">DAY</button>
                                <button className="button appearance-filled size-medium status-basic shape-rectangle transitions px-3 py-2 me-2">WEEK</button>
                                <button className="button appearance-filled size-medium status-basic shape-rectangle transitions px-3 py-2">MONTH</button>
                            </div>

                            <div className="d-flex align-items-center">
                                <button className="button size-xl-medium appearance-filled fw-bold size-medium status-primary shape-rectangle icon-start transitions me-2">
                                    <RiCalendarTodoLine className="fw-bold fs-5 me-1" />
                                    <span>schedule</span>
                                </button>
                                <button className="button1 size-xl-medium appearance-filled fw-bold size-medium status-basic shape-rectangle icon-start transitions">
                                    <AiOutlineExpandAlt className="fw-bold fs-5" />
                                    <span className="d-none">Button</span>
                                </button>
                            </div>
                        </div>

                        <div className="divider2"></div>

                        <div className="m-1">
                            <table className="table border mb-0">
                                <thead>
                                    <tr>
                                        <th className="column1">
                                            <p className="text-hint paragraph-2">GMT+1</p>
                                        </th>
                                        <th>
                                            <label className="text-hint label">MON</label>
                                            <h6 className="text-basic">12</h6>
                                        </th>
                                        <th>
                                            <label className="text-hint label">TUE</label>
                                            <h6 className="text-basic">13</h6>
                                        </th>
                                        <th>
                                            <label className="text-primary label">WED</label>
                                            <h6 className="text-primary">14</h6>
                                        </th>
                                        <th>
                                            <label className="text-hint label">THU</label>
                                            <h6 className="text-basic">15</h6>
                                        </th>
                                        <th>
                                            <label className="text-hint label">FRI</label>
                                            <h6 className="text-basic">16</h6>
                                        </th>
                                        <th>
                                            <label className="text-hint label">SAT</label>
                                            <h6 className="text-basic">17</h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>  
                                    <tr>  
                                        <td className="slot">
                                            <p className="text-hint paragraph-2">8 AM</p>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"AD 2456"} workshop={true} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className=""><MaintenanceVisit vehicleName={"AF 2415"} workshop={false} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                    </tr>  
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text-hint paragraph-2">9 AM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"FF 5863"} workshop={false} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <p className="text-hint paragraph-2">10 AM</p>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"DF 2315"} workshop={true} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text-hint paragraph-2">11 AM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text-hint paragraph-2">12 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"BN 2461"} workshop={false} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text-hint paragraph-2">1 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"VB 3261"} workshop={true} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                            <p className="text3 text-hint paragraph-2">2 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text3 text-hint paragraph-2">3 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text-hint paragraph-2">4 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"AF 4151"} workshop={true} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text3 text-hint paragraph-2">5 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot">
                                            <div className="">
                                                <MaintenanceVisit vehicleName={"FG 1451"} workshop={true} />
                                                <button className="button size-xl-tiny appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                                    <BsThreeDotsVertical className=""/>
                                                    <span className="d-none">Button</span>
                                                </button>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text3 text-hint paragraph-2">6 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>
                                    <tr>  
                                        <td className="slot">
                                            <div className="">
                                                <p className="text3 text-hint paragraph-2">7 PM</p>
                                            </div>
                                        </td>  
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                        <td className="slot"></td>
                                    </tr>    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MaintenancePlanner;