import { BsPlus } from 'react-icons/bs';

import VehicleTabs from "./shared/vehicle-tabs";

const Fleet = () => {
    return (
        <div className="fleet">
            <div className="d-flex align-items-center justify-content-between px-3 py-1 my-1">
                <h5 className="heading text-basic mb-0">Vehicles</h5>
                <button className="button size-xl-medium appearance-filled size-medium status-primary shape-rectangle icon-start transitions fw-bold">
                    <BsPlus className="me-2 fs-4"/>
                    <span>add vehicle</span>
                </button>
            </div>
            <div className="divider2"></div>
            <VehicleTabs />
        </div>
    )
};

export default Fleet;