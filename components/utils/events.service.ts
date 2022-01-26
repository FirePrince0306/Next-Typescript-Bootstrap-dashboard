import { Event, EventStatus } from '~/components/features/common';

export class EventsService {
	data: Event[] = [
		{
			status: EventStatus.SUCCESS,
			message: 'Delivered',
			date: new Date(),
			vehicle: 'AB 2515',
		}, {
			status: EventStatus.SUCCESS,
			message: 'Maintenance pased',
			date: new Date(),
			vehicle: 'VB 2516',
		}, {
			status: EventStatus.INFO,
			message: 'Parking',
			date: new Date(),
			vehicle: 'WW 1672',
		}, {
			status: EventStatus.INFO,
			message: 'New trip started',
			date: new Date(),
			vehicle: 'VN 2516',
		}, {
			status: EventStatus.WARNING,
			message: 'High speed',
			date: new Date(),
			vehicle: 'VB 2515',
		}, {
			status: EventStatus.ERROR,
			message: 'Low fuel level',
			date: new Date(),
			vehicle: 'TY 1123',
		}
	];

	getRandomInt(max: number) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	getRandomEvents(): Event[] {
		const start = this.getRandomInt(this.data.length);
		const end = this.getRandomInt(this.data.length);
		return this.data.slice(start > end ? end : start, start > end ? start : end);
	}

	getRandomEvent(): Event {
		const elementValue = this.getRandomInt(this.data.length);
		return this.data[elementValue];
	}

	getEvents(): Event[] {
		return this.data;
	}
}
