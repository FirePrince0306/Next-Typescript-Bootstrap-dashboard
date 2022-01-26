import { Trip, Vehicle, VehicleTripStatus } from '~/components/features/common';

import { VehiclesService } from './vehicles.service';

export class TripsService {
	private MyVehiclesService:VehiclesService = new VehiclesService();

	MygetVehicleByIndex(index: number): Vehicle {
		return this.MyVehiclesService.getVehicleByIndex(index);
	}

	data: Trip[] = [{
			vehicle: this.MygetVehicleByIndex(0),
			travelledPath: [
				[40.683055, -111.825476],
				[40.807519, -111.407743],
				[40.960830, -111.456866],
				[41.247660, -111.062614],
				[41.315487, -110.7201238],
				[41.397952, -110.187286],
				[41.555374, -109.900268],
				[41.527621, -109.414123],
				[41.597544, -109.226117],
			],
			upcomingPath: [
				[41.597544, -109.226117],
				[41.630142, -109.082265],
				[41.688881, -108.842969],
				[41.648454, -108.655882],
				[41.630340, -108.280878],
				[41.788374, -107.392355],
				[41.753333, -106.510197],
				[41.340500, -105.621835],
				[41.102933, -102.557626],
				[41.062762, -102.078786],
			],
			currentPosition: {
				lat: 41.597544,
				lng: -109.226117,
			},
			startDate: new Date(),
			endDate: new Date(),
			duration: 3,
			coveredDistance: 1200,
			averageSpeed: 110,
			vehicleInTripStatus: VehicleTripStatus.PARKED,
		},
		{
			vehicle: this.MygetVehicleByIndex(1),
			travelledPath: [
				[42.527639, -105.054295],
				[41.772122, -104.792995],
				[41.135645, -104.819125],
				[39.715710, -104.961201]
			],
			upcomingPath: [
				[39.715710, -104.961201],
				[38.771367, -104.767322],
				[38.210466, -104.590755],
				[37.871292, -104.855023],
				[37.228516, -104.498949],
				[36.785428, -104.455983],
				[36.552838, -104.542770],
			],
			currentPosition: {
				lat: 39.715710,
				lng: -104.961201,
			},
			startDate: new Date(),
			endDate: new Date(),
			duration: 3,
			coveredDistance: 1900,
			averageSpeed: 110,
			vehicleInTripStatus: VehicleTripStatus.DRIVING,
		},
		{
			vehicle: this.MygetVehicleByIndex(2),
			travelledPath: [
				[46.860315, -96.854137],
				[45.939092, -96.823948],
				[45.401006, -97.049961],
				[44.799147, -96.951232],
				[43.868290, -96.780700],
			],
			upcomingPath: [
				[43.868290, -96.780700],
				[42.877261, -96.785085],
				[41.422523, -95.909592],
				[38.979579, -94.530430],
			],
			currentPosition: {
				lat: 43.868290,
				lng: -96.780700,
			},
			startDate: new Date(),
			endDate: new Date(),
			duration: 3,
			coveredDistance: 1500,
			averageSpeed: 110,
			vehicleInTripStatus: VehicleTripStatus.DRIVING,
		},
		{
			vehicle: this.MygetVehicleByIndex(5),
			travelledPath: [
				[32.805441, -97.077157],
				[32.707355, -96.299225],
				[32.549152, -95.860493],
			],
			upcomingPath: [
				[32.549152, -95.860493],
				[32.370160, -95.448771],
				[32.237567, -95.037610],
				[32.170384, -94.784713],
				[32.174118, -94.333320],
				[31.953519, -94.237141],
				[31.783005, -94.188859],
				[31.504500, -94.134222],
				[31.504500, -94.134222],
				[31.346276, -94.013651],
			],
			currentPosition: {
				lat: 32.549152,
				lng: -95.860493,
			},
			startDate: new Date(),
			endDate: new Date(),
			duration: 3,
			coveredDistance: 200,
			averageSpeed: 110,
			vehicleInTripStatus: VehicleTripStatus.BROKEN,
		},
		{
			vehicle: this.MygetVehicleByIndex(6),
			travelledPath: [
				[35.451713, -97.428926],
				[37.602705, -97.312530],
				[39.018265, -95.659706],
				[39.054429, -94.693618],
				[39.013355, -94.538448],
				[38.955906, -92.228857],
				[38.615948, -90.262395],
			],
			upcomingPath: [
				[38.615948, -90.262395],
				[39.708061, -86.292490],
				[39.958996, -82.868554],
				[40.016822, -81.510030],
				[40.408742, -80.076033],
			],
			currentPosition: {
				lat: 38.615948,
				lng: -90.262395,
			},
			startDate: new Date(),
			endDate: new Date(),
			duration: 3,
			coveredDistance: 660,
			averageSpeed: 110,
			vehicleInTripStatus: VehicleTripStatus.DRIVING,
		},
	];

	getTrips(): Trip[] {
		return this.data;
	}

	getTripsWithDrivingVehicles(): Trip[] {
		return this.data.filter((trip) => {
			return trip.vehicleInTripStatus === VehicleTripStatus.DRIVING;
		});
	}

	getTripsWithParkedVehicles(): Trip[] {
		return this.data.filter((trip) => {
			return trip.vehicleInTripStatus === VehicleTripStatus.PARKED;
		});
	}

	getMarkersData(): any {
		return this.data.map((trip) => {
			return {
				type: trip.vehicle.type.toString().toLowerCase(),
				status: trip.vehicleInTripStatus,
				lat: trip.currentPosition.lat,
				lng: trip.currentPosition.lng,
				vehicle: trip.vehicle
			};
		});
	}
}
