import { GoAlert } from 'react-icons/go';

const VehiclePopOver = () => {
    return (
        <>
            <div className="vehicle-popover">
                <div className="vehicle-popover-body">
                    <div className="vehicle-star-inserted d-flex">
                        <div className="vehicle-popover-icon">
                            <GoAlert className="text-danger"/>
                        </div>
                        <div className="vehicle-popover-content">
                            <p className="text text-danger mb-0 caption-2">Engine critical state</p>
                            <p className="text1 text-danger mb-0 caption">Please check fuel pump</p>
                        </div>
                    </div>
                    <div className="vehicle-star-inserted d-flex">
                        <div className="vehicle-popover-icon">
                            <GoAlert className="text-danger"/>
                        </div>
                        <div className="vehicle-popover-content">
                            <p className="text text-danger mb-0 caption-2">Low battery</p>
                            <p className="text1 text-danger mb-0 caption">Please recharge battery</p>
                        </div>
                    </div>
                    <div className="vehicle-star-inserted d-flex">
                        <div className="vehicle-popover-icon">
                            <GoAlert className="text-danger"/>
                        </div>
                        <div className="vehicle-popover-content">
                            <p className="text text-danger mb-0 caption-2">Critical fuel level</p>
                            <p className="text1 text-danger mb-0 caption">Please refuel</p>
                        </div>
                    </div>
                </div>

                <div className="vehicle-popover-footer">
                    <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold w-100">
                        <span>ALL EVENTS</span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default VehiclePopOver;
