import { BsPlus } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

import VehicleTabs from "./shared/vehicle-tabs";

const VehicleDetails = () => {
    return (
        <div className="vehicle-details">
            <div className="d-flex align-items-center justify-content-between px-3 py-1 my-1">
                <h5 className="heading text-basic mb-0">Back to All Vehicles</h5>
                <div className="d-flex">
                    <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold me-10">
                        <AiFillStar className="me-2 fs-4"/>
                        <span>EVENTS</span>
                    </button>

                    <button className="button size-xl-medium appearance-filled size-medium status-primary shape-rectangle icon-start transitions fw-bold">
                        <BsPlus className="me-2 fs-4"/>
                        <span>add vehicle</span>
                    </button>
                </div>
            </div>
            <div className="divider2"></div>
            <VehicleTabs />
        </div>
    )
};

export default VehicleDetails;