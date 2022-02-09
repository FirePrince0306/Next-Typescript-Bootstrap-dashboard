type Nullable<T> = T | undefined | null;

export interface Vehicle {
    name: string;
    vin: string;
    model: string;
    color: string;
    year: number;
    licensePlate: string;
    type: VehicleType;
    status: VehicleStatus;
    odometer: number;

    condition: {
        overview: number;
        status: VehicleConditionStatus
    };

    indicators: {
        engine: boolean;
        battery: boolean;
        oil: number;
        gas: number;
    };

    assignedDrivers: Nullable<AssignedDriver[]>;

    events: Event[];
    currentEvent: Event;
}

export interface Trip {
    vehicle: Vehicle;
    startDate: Date;
    endDate: Date;
    travelledPath: number[][];
    upcomingPath: number[][];
    currentPosition: Coordinate;
    duration: number;
    coveredDistance: number;
    averageSpeed: number;
    vehicleInTripStatus: VehicleTripStatus;
}

export interface Coordinate {
    lat: number;
    lng: number;
}

export interface Event {
    status: EventStatus;
    message: string;
    date: Date;
    vehicle: string;
}

export interface Driver {
    name: string;
    surname: string;
}

export interface AssignedDriver {
    driver: Driver;
    startDate: Date;
    endDate: Date;
}

export enum VehicleType {
    TRUCK = 'Truck',
    VAN = 'Van',
    CAR = 'Car',
}

export enum EventStatus {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}

export enum VehicleTripStatus {
    BROKEN = 'broken',
    DRIVING = 'driving',
    PARKED = 'parked'
}

export enum VehicleStatus {
    ON_ROUTE = 'on route',
    AVAILABLE = 'available',
    OUT_OF_SERVICE = 'out of service',
}

export enum VehicleConditionStatus {
    GOOD = 'good',
    SATISFACTORY = 'satisfactory',
    CRITICAL = 'critical',
}  