import { IoNavigate } from 'react-icons/io5';
import { GoAlert } from 'react-icons/go';

import { Trip, VehicleTripStatus } from "~/components/features/common";
import { TripsService } from '~/components/utils/trips.service';

import VehiclePopOver from '~/pages/dashboard/vehicle-popover';

export type VehicleProps = {
    trip: Trip;
    key: string;
    selected: boolean;
    id: number;
    handleActiveVehicleId: (id: number) => void;
    handleCurrentVehicle: (vehicle: Trip | null) => void;
    handleMarkers: (markers: any) => void;
};

const VehicleCard: React.FC<VehicleProps> = ({trip, selected, handleActiveVehicleId, handleCurrentVehicle, handleMarkers, id}) => {
    const MyTripsService:TripsService = new TripsService();
	let tempMarkers = MyTripsService.getMarkersData();

    function getImageSource(): any {
        switch (trip.vehicleInTripStatus) {
        case VehicleTripStatus.BROKEN:
            return require(`~/public/images/${trip.vehicle.type.toLowerCase()}-outofservice.png`);
        case VehicleTripStatus.PARKED:
            return require(`~/public/images/${trip.vehicle.type.toLowerCase()}-available.png`);
        case VehicleTripStatus.DRIVING:
            return require(`~/public/images/${trip.vehicle.type.toLowerCase()}-onroute.png`);
        }
    }

    return(
        <>
            <div className={`vehicle-card d-flex py-3 ${selected ? 'selected-vehicle-bg' : ''}`}
                onClick={()=> {
                    selected ? ( handleActiveVehicleId(-1), handleCurrentVehicle(null), handleMarkers(tempMarkers)) : (handleActiveVehicleId(id), handleCurrentVehicle(trip), handleMarkers( 
                        [{
                            type: trip.vehicle.type.toString().toLowerCase(),
                            status: trip.vehicleInTripStatus,
                            lat: trip.currentPosition.lat,
                            lng: trip.currentPosition.lng,
                            vehicle: trip.vehicle
                        }]))
                }}>
                <div className="vehicle-image d-flex align-items-center"> 
                    <img className="image" src={getImageSource().default.src} width="52" height="52" alt="vehicle-avatar" />
                </div>
                <div className="vehicle-content">
                    <h5 className="heading text-basic">{trip.vehicle.name}</h5>
                    <p className="m-0 text-hint paragraph">17 May, 20 / 1h 15min</p>
                </div>
                <div className="vehicle-action d-flex ms-auto justify-content-end align-items-end flex-column">
                    {
                        trip.vehicle.condition.overview < 50 ? 
                            <GoAlert className="text-danger" /> : ''
                    }
                    <VehiclePopOver />
                    <button className="button size-xl-tiny appearance-filled status-basic shape-rectangle mt-2">
                        <span className="fw-bold">trip<IoNavigate /></span>
                    </button>
                </div>
            </div>
            <div className="divider2"></div>
        </>
    )
};

export default VehicleCard;
