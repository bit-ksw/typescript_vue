import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {

	private axios: AxiosInstance;

	constructor() {
		this.axios = axios.create();
	}

	public request(config: AxiosRequestConfig): AxiosPromise {
		return this.axios.request(config);
	}
}

const httpClient = new HttpClient();

export default httpClient;