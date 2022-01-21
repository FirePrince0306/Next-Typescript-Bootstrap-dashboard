import { useState } from 'react';
import type { InferGetStaticPropsType } from 'next';

import { framework } from '~/pages/api/dashboard';

import { IoMdClose } from 'react-icons/io';
import { IoOptionsSharp } from 'react-icons/io5';

import { Trip } from '~/components/features/common';

import VehicleTabs from '~/pages/dashboard/vehicle-tabs';
import TripDetails from '~/pages/dashboard/trip-details';

export function getStaticProps() {
	return { props: { framework } };
}

const VehicleOverview = ({
	framework
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [activeVehicle, setActiveVehicle] = useState(true);
	const [activeVehicleId, setActiveVehicleId] = useState(-1);
	const [currentVehicle, setCurrentVehicle] = useState<Trip | null>(null);

	const handleActiveVehicleId = (id: number) => {
		setActiveVehicleId(id);
	};

	const handleCurrentVehicle = (trip: Trip | null) => {
		setCurrentVehicle(trip);
	};

	return (
		<>
			<div className="d-flex px-1 px-md-0" style={{height: "fit-content"}}>
				{
					activeVehicle ? <>
						<div className="active-vehicles">
							<div className="d-flex align-items-center justify-content-between p-3">
								<h6 className="heading text-basic mb-0">Active Vehicles</h6>
								<span onClick={() => setActiveVehicle(false)} >
									<IoMdClose />
								</span>
							</div>
							<div className="divider2"></div>
							<div className="d-flex vehicle-value align-items-center">
								<input className="input size-xl-medium size-medium status-basic shape-rectangle	" placeholder="Enter Value" type="text" />
								
								<span className="icon d-flex pe-1 me-3">
									<IoOptionsSharp />
								</span>
							</div>
							<div className="divider2"></div>
							<VehicleTabs
								handleActiveVehicleId={handleActiveVehicleId}
								handleCurrentVehicle={handleCurrentVehicle}
								id={activeVehicleId}
							/>
						</div>
						<div className="divider3"></div>
					</> : ''
				}
				{
					activeVehicleId > -1 && currentVehicle !== null ?
					<TripDetails handleActiveVehicleId={handleActiveVehicleId} id={activeVehicleId} trip={currentVehicle}/> : ''
				}
			</div>
		</>
)};

export default VehicleOverview;
