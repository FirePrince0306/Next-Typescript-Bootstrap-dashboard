import { BsPlus } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

import ConditionChart from '~/components/pages/vehicles/condition-chart';
import CommonInformation from '~/components/pages/vehicles/common-infomation';
import KeyIndicators from '~/components/pages/vehicles/key-indicators';
import DetailsCard from '~/components/pages/vehicles/details-card';
import Maintenance from '~/components/pages/vehicles/maintenance';
import Trip from '~/components/pages/vehicles/trip';

const VehicleDetails = () => {
    return (
        <div className="vehicle-details bg-grey">
            <div className="d-flex align-items-center justify-content-between px-3 py-2 bg-white">
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

            <div className="p-3">
                <div className="d-lg-flex">
                    <CommonInformation />

                    <div className="ms-3 p-4 bg-white border border-1 rounded-3 safe-driving">
                        <h6 className="heading text-basic">Vehicle Condition</h6>
                        <div className="mt-4 pt-3 safe-chart">
                            <ConditionChart />
                        </div>
                    </div>

                    <KeyIndicators />
                </div>

                <div className="d-lg-flex mt-3">
                    <DetailsCard />

                    <div className="d-lg-flex ms-lg-3 ms-0 maintenance-trip">
                        <Maintenance />

                        <Trip />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VehicleDetails;