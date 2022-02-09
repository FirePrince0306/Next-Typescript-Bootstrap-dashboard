import { Driver } from '~/components/features/common';

export class DriversService {
	data: Driver[] = [
		{
			name: 'John',
			surname: 'Doe'
		}, {
			name: 'Steve',
			surname: 'Garberg',
		}, {
			name: 'Alex',
			surname: 'Anderson'
		}, {
			name: 'George',
			surname: 'Williams'
		}
	];

	getDrivers(): Driver[] {
		return this.data;
	}

	getRandomInt(max: number) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	getRandomDriver(): Driver {
		const index = this.getRandomInt(this.data.length);
		return this.data[index];
	}
}
