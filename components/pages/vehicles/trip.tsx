import dynamic from "next/dynamic";

import { AiFillStar } from 'react-icons/ai';

const MapWidget = dynamic(() => import('./trip-map'), {
    ssr: false
});

export type TripProps = {
};

const Trip: React.FC<TripProps> = ({}: TripProps) => {
    return (
        <>
            <div className="d-flex flex-column bg-white border border-1 rounded-3 w-100 w-lg-50 trip ms-lg-3">
                <div className="p-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                        <h6 className="heading text-basic me-1 mb-0">Trip</h6>
                        <span className="text-primary subtitle-2 mb-0">LIVE</span>
                    </div>

                    <div className="d-flex">
                        <button className="d-flex align-items-center button size-xl-small appearance-outline size-medium status-primary shape-rectangle icon-start transitions">
                            <AiFillStar className="me-1" />
                            <span>map</span>
                        </button>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-flex flex-wrap mb-3">
                    <div className="pt-3 ps-3 w-50 h-50 d-flex flex-column">
                        <span className="text-hint caption">Start Date</span>
                        <span className="text-basic subtitle-2">14 May / 10:35 AM</span>
                    </div>
                    <div className="pt-3 ps-3 w-50 h-50 d-flex flex-column">
                        <span className="text-hint caption">Start Date</span>
                        <span className="text-basic subtitle-2">14 May / 12:35 AM</span>
                    </div>
                    <div className="pt-3 ps-3 w-50 h-50 d-flex flex-column">
                        <span className="text-hint caption">Distance Covered</span>
                        <span className="text-basic subtitle-2">5671,7 km</span>
                    </div>
                    <div className="pt-3 ps-3 w-50 h-50 d-flex flex-column">
                        <span className="text-hint caption">Duration</span>
                        <span className="text-basic subtitle-2">18h 23min</span>
                    </div>
                </div>

                <div className="w-100 h-100">
                    <MapWidget />
                </div>
            </div>
        </>
    )
};

export default Trip;