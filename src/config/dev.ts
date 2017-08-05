export type ConfigUrl = string;

export interface Config {
	urls: {
    baseUrl: ConfigUrl;
    webApiUrl: ConfigUrl;
  };
}

const config: Config= {
  urls: {
    baseUrl: '',
    webApiUrl: 'http://localhost:3000',
  },
};

export default config;