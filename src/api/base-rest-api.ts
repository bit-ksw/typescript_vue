import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ConfigUrl } from '../config/dev';
import httpClient, { HttpClient } from './http-client';

interface ErrorInfo {
	status: number;
	data: object;
}

export default class BaseRestApi {
	private baseUrl: ConfigUrl;
	private client: HttpClient;

	constructor(baseUrl: ConfigUrl) {
		this.baseUrl = baseUrl;
		this.client = httpClient;
	}

	public get<T>(path: string, params?: any): Promise<T> {
		const config: AxiosRequestConfig = {};

		config.method = 'get';
		config.url = `${this.baseUrl}/${path}`;

		if (typeof params !== 'undefined') {
			config.params = params;
		}

		return new Promise<T>((resolve: (data: T) => void, reject: (errorInfo: ErrorInfo | string) => void) => {
			this.client.request(config)
				.then((response: AxiosResponse) => {
					resolve(response.data);
				})
				.catch((error: AxiosError) => {
					if (error.response) {
						const errorInfo: ErrorInfo = {
							status: error.response.status,
							data: error.response.data,
						};
						reject(errorInfo);
					} else {
						reject(error.message);
					}
				});
		});
	}
}