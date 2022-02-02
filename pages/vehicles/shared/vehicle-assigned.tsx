import { GoCircleSlash } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { BsFillCheckCircleFill, BsPerson } from 'react-icons/bs';
import { IoNavigateSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';

import {Vehicle} from '~/components/features/common';

export type VehicleAssignedProps = {
    item: Vehicle
};

import {useState} from 'react';

const VehicleAssigned: React.FC<VehicleAssignedProps> = ({item}: VehicleAssignedProps) => {
    const [isChecked, setIsChecked]=useState(false);
    const [showDetails, setShowDetails] = useState(false);
    
    function getImageSource(): any {
        const vehicleStatus = item.status.replace(/\s/g, '');
        return require(`/public/images/${item.type.toLowerCase()}-${vehicleStatus}.png`);
    }

    function getFullName(): any {
        if(item.assignedDrivers)
            return `${item.assignedDrivers[0]?.driver.name} ${item.assignedDrivers[0]?.driver.surname}`;
    }

    function getFormattedDate(date: Date, separator: string) {
        const dd = date.getDate();
        const mm = date.getMonth();
        let formattedDate = dd.toString();
        let formattedMonth = mm.toString();
        if (dd < 10) {
            formattedDate = `0${dd}`;
        }
    
        if (mm < 10) {
            formattedMonth = `0${mm}`;
        }
    
        return `${formattedDate}${separator}${formattedMonth}${separator}${date.getFullYear()}`;
    }

    function getDatesGap(): String {
        if(item.assignedDrivers) {
            const startDate = item.assignedDrivers[0].startDate;
            const endDate = item.assignedDrivers[0].endDate;
            return `${getFormattedDate(startDate, '.')} - ${getFormattedDate(endDate, '.')}`;
        } else {
            return "Not defined"
        }
    }

    function isDriverExist(): boolean {
        return !!item.assignedDrivers;
    }

    function checkHandler(): void {

    }

    return (
        <>
            <div className={`d-flex align-items-center border border-1 rounded-3 pt-10 pb-10 vehicle-assigned mt-10 ${showDetails ? 'show' : 'hidden'}`}>
                <div className="checkbox d-flex justify-content-center ps-2" style={{width: "4.8%"}}>
                    <input style={{float: 'left', borderColor: 'red', border: '3px'}} type="checkbox" checked={isChecked} onChange={checkHandler}/>
                    <span className="wrapper" onClick={()=>{setIsChecked(!isChecked)}}>
                        <AiOutlineCheck className="text-white" />
                    </span>
                </div>

                <div className="d-flex align-items-center" style={{width: "22.6%"}}>
                    <img className="image" src={getImageSource().default.src} width="42" height="42" />
                    <div className="d-flex flex-column ms-2 ps-1">
                        <h6 className="heading text-basic fw-bold mb-0">{item.name}</h6>
                        <span className="text-hint caption-2">{item.type}</span>
                    </div>
                </div>

                <div className="ps-3" style={{width: "17%"}}>
                    {
                        item.status === 'on route' ? 
                            <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                <IoNavigateSharp className="text-primary me-1" />
                                <span className="text-primary subtitle">On Route</span>
                            </div> : item.status === 'available' ?
                                <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                    <BsFillCheckCircleFill className="text-info me-1" />
                                    <span className="text-info subtitle">Available</span>
                                </div> :
                                    <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                        <GoCircleSlash className="text-danger me-1" />
                                        <span className="text-danger subtitle">Out of Service</span>
                                    </div>
                    }
                </div>

                <div className="d-flex align-items-center ps-3" style={{width: "19.7%"}}>
                    <BsPerson className="text-hint me-2" />
                    {
                        !!item.assignedDrivers ?
                            <span className="text-basic subtitle" key={"name-assigned"}>
                                {getFullName()}
                            </span> : 
                            <span className="text-disabled subtitle" key={"not-assigned"}>Not Assigned</span>
                    }
                </div>

                <div className="d-flex align-items-center ps-3 ms-1" style={{width: "20%"}}>
                    <RiCalendarTodoLine className="text-hint me-2" />
                    <span className="text1 text-basic subtitle me-2">{getDatesGap()}</span>
                </div>

                <div className="d-flex justify-content-end" style={{width: "11.9%"}}>
                    {
                        isDriverExist() ? 
                            <button className="button size-xl-small appearance-filled size-medium status-basic shape-rectangle icon-start ng-star-inserted transitions">
                                <IoMdClose className="text-hint me-2" />
                                <span>remove</span>
                            </button> :
                                <button className="button size-xl-small appearance-filled size-medium status-basic shape-rectangle icon-start ng-star-inserted transitions">
                                    <BsPerson className="text-hint me-2" />
                                    <span>assign</span>
                                </button>
                    }
                </div>

                <div className="d-flex justify-content-center" style={{width: "4%"}}>
                    <FiChevronDown onClick={()=>setShowDetails(!showDetails)} />
                </div>
            </div>

            {
                showDetails ?
                    <div className="d-flex align-items-center border border-1 rounded-3 detail">
                        <div className="maintenance-details" style={{width: "43.4%"}}></div>

                        <div className="tasks pt-3 px-3 mx-2 pb-3 mb-2" style={{width: "54%"}}>
                            <span className="text-hint caption-2 pb-1">ALL DRIVERS</span>

                            {
                                !item.assignedDrivers ? '' : item.assignedDrivers.map((assignedDriver, index) => {
                                    return <div key={"assigned-user" + index}>
                                            <div className="driver d-flex align-items-center">
                                                <span className="text-basic subtitle" key={"assigned-driver-" + index} style={{width: "45%"}}>{assignedDriver.driver.name + ' ' + assignedDriver.driver.surname}</span>
                                                <div className="d-flex align-items-center gap"  style={{width: "45%"}}>
                                                    <RiCalendarTodoLine className="text-hint me-2" />
                                                    <span className="text1 text-basic subtitle me-2">{getDatesGap()}</span>
                                                </div>
                                                <div className="remove d-flex justify-content-end" style={{width: "10%"}}>
                                                    <IoMdClose className="text-hint me-2" />
                                                </div>
                                            </div>
                                            <div className="divider2 my-2"></div>
                                        </div>
                                })
                            }
                        </div>
                    </div> : ''
            }
        </>
    )
};

export default VehicleAssigned;