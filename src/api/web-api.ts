import config from '../config';
import { MaintenanceResponse } from '../services/maintenance-service';
import BaseRestApi from './base-rest-api';

interface ErrorInfo {
	status: number;
	data: object;
}

export class Webapi extends BaseRestApi {
	constructor() {
		super(config.urls.webApiUrl);
	}

	public getMaintenanceList(): Promise<MaintenanceResponse> {
		const promise: Promise<MaintenanceResponse> = this.get<MaintenanceResponse>('maintenances')
			.catch((error: ErrorInfo | string) => {
				return Promise.reject(error);
			});
			
			return promise;
	};
	
}

const webapi = new Webapi();

export default webapi;