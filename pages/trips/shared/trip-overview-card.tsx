import {useState} from 'react';

import { GoClock } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsThreeDotsVertical, BsPerson } from 'react-icons/bs';

import {Vehicle} from '~/components/features/common';

export type TripOverviewCardProps = {
    item: Vehicle
};

const TripOverviewCard: React.FC<TripOverviewCardProps> = ({item}: TripOverviewCardProps) => {
    const [isChecked, setIsChecked]=useState(false);

    function getImageSource(): any {
        const vehicleStatus = item.status.replace(/\s/g, '');
        return require(`/public/images/${item.type.toLowerCase()}-${vehicleStatus}.png`);
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
            const startDate = Number(new Date(item.assignedDrivers[0].startDate));
            const endDate = Number(new Date(item.assignedDrivers[0].endDate));
            const days = (endDate - startDate)/86400000;
            const hours = ((endDate - startDate)%86400000)/3600000;
            const mins = ((endDate - startDate)%3600000)/60000;
            return `${days ? days + 'days' : ''} ${hours ? hours + 'hours' : ''} ${mins ? mins + 'mins' : ''}`
        } else {
            return "Not defined"
        }
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
                <div style={{width: "11%"}}>
                    <p className="text-hint paragraph-2 mb-0">#786473</p>
                    <span className="text-info subtitle-2">SCHEDULED</span>
                </div>
                <div className="d-flex" style={{width: "21%"}}>
                    <img className="image" src={getImageSource().default.src} width="42" height="42" />
                    <div className="d-flex flex-column ms-2 ps-1">
                        <span className="heading text-basic fw-bold">{item.name}</span>
                        <span className="text-hint caption-2">{item.type.toUpperCase()}</span>
                    </div>
                </div>
                <div className="ps-3" style={{width: "18.2%"}}>
                    {
                        !!item.assignedDrivers ? <span className="text-basic subtitle"><BsPerson className="me-1"/>{item.assignedDrivers[0].driver.name + ' ' + item.assignedDrivers[0].driver.surname}</span> : 
                        <button className="button size-xl-small appearance-outline size-medium status-basic shape-rectangle icon-start transitions">
                            <BsPerson className="me-1"/>
                            <span>assign</span>
                        </button>
                    }
                </div>
                <div className="d-flex flex-column ps-3" style={{width: "12%"}}>
                    {
                        !!item.assignedDrivers ? <>
                            <span className="text-basic subtitle">{getFormattedDate(item.assignedDrivers[0].startDate, '.')}</span>
                            <span className="text-hint caption-2">6:00PM</span>
                        </> : <span className="text-basic subtitle">Not Assigned</span>
                    }
                </div>
                <div className="d-flex flex-column ps-3" style={{width: "12%"}}>
                    {
                        !!item.assignedDrivers ? <>
                            <span className="text-basic subtitle">{getFormattedDate(item.assignedDrivers[0].endDate, '.')}</span>
                            <span className="text-hint caption-2">6:00PM</span>
                        </> : <span className="text-basic subtitle">Not Assigned</span>
                    }
                </div>
                <div style={{width: "17%"}}>
                    <GoClock className="text-basic me-2"/>
                    <span className="text-basic subtitle">{getDatesGap()}</span>
                </div>
                <div className="text-end" style={{width: "4%"}}>
                    <BsThreeDotsVertical className="text-hint fs-5 pe-2" />
                </div>
            </div>
        </>
    )
};

export default TripOverviewCard;