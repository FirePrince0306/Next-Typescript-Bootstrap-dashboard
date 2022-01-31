import { GoAlert } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCheckCircle, FaInfoCircle, FaAngleRight, FaRegStar } from 'react-icons/fa';
import { RiErrorWarningFill, RiCalendarTodoLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';

import {Event} from '~/components/features/common';

export type VehicleEventProps = {
    item: Event
};

import {useState} from 'react';

const VehicleEvent: React.FC<VehicleEventProps> = ({item}: VehicleEventProps) => {
    const [isChecked, setIsChecked]=useState(false);

    function formatDate(date: Date): String {
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    }

    function formatTime(date: Date): String {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        let sign = 'AM';
    
        if (hours >= 12) {
            hours -= 12;
            sign = 'PM';
        }
        return `${hours}.${minutes}${sign}`;
    }

    function checkHandler(): void {

    }

    return (
        <>
            <div className="d-flex align-items-center border border-1 rounded-3 pt-10 pb-10 mb-10 vehicle-event">
                <div className="checkbox d-flex justify-content-center ps-2" style={{width: "4.8%"}}>
                    <input style={{float: 'left', borderColor: 'red', border: '3px'}} type="checkbox" checked={isChecked} onChange={checkHandler}/>
                    <span className="wrapper" onClick={()=>{setIsChecked(!isChecked)}}>
                        <AiOutlineCheck className="text-white" />
                    </span>
                </div>

                <div className="" style={{width: "16%"}}>
                    {
                        item.status === 'success' ? 
                            <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                <FaCheckCircle className="text-primary me-1" />
                                <span className="text-primary subtitle">Success</span>
                            </div> : item.status === 'info' ?
                                <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                    <FaInfoCircle className="text-info me-1" />
                                    <span className="text-info subtitle">Info</span>
                                </div> : item.status === 'warning' ?
                                    <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                        <RiErrorWarningFill className="text-warning me-1" />
                                        <span className="text-warning subtitle">Warning</span>
                                    </div> :
                                        <div className="d-inline-flex align-items-center border border-1 rounded-2 py-1 px-2">
                                            <GoAlert className="text-danger me-1" />
                                            <span className="text-danger subtitle">Error</span>
                                        </div>
                    }
                </div>

                <div className="ps-3" style={{width: "24%"}}>
                    <span className="text text-basic subtitle">{item.message}</span>
                </div>

                <div className="d-flex align-items-center ps-3" style={{width: "23%"}}>
                    <RiCalendarTodoLine className="text-hint me-2" />
                    <span className="text1 text-basic subtitle me-2">{formatDate(item.date)}</span>
                    <span className="text2 text-hint subtitle">{formatTime(item.date)}</span>
                </div>

                <div className="d-flex align-items-center" style={{width: "21%"}}>
                    <img className="image" src={require(`~/public/images/Group@2x9.png`).default.src} width="42" height="42" />
                    <div className="d-flex align-items-center ms-3">
                        <span className="text3 text-basic subtitle">{item.vehicle}</span>
                        <FaAngleRight className="ms-3 text-hint" />
                    </div>
                </div>

                <div className="" style={{width: "11.2%"}}>
                    <button className="button size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                        <FaRegStar className="text-hint fs-5" />
                        <span className="d-none">Button</span>
                    </button>
                    <button className="button1 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                        <BsThreeDotsVertical className="text-hint fs-5" />
                        <span className="d-none">Button</span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default VehicleEvent;