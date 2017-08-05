import webApi from '../api/web-api';

export interface MaintenanceResponse {
	title: string;
	url: string;
}

export class MaintenanceService {
	public maintenanceList(): Promise<MaintenanceResponse> {
		return webApi.getMaintenanceList();
	}
}

export default new MaintenanceService();