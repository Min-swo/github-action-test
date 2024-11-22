import axios from 'axios';
type headersProps = {
  'Content-type': string;
  Authorization: string | null;
};
type configProps = {
  url: string;
  method: string;
  headers: headersProps;
  data: object | null | undefined;
  params: object | null | undefined;
};

const API = axios.create({ baseURL: 'http://localhost:8080/api/v1' });

const apiCall = async (
  url: string,
  method = 'get',
  data: null | undefined | object,
  token: null | string = null
) => {
  try {
    const headers: headersProps = {
      'Content-type': 'application/json',
      Authorization: '',
    };
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }
    const config: configProps = {
      url,
      method,
      headers,
      data: {},
      params: {},
    };
    if (method.toLowerCase() === 'get') {
      config.params = data;
    } else {
      config.data = data;
    }

    const response = await API(config);
    return response;
  } catch (error) {
    console.error('API call error', error);
    throw error;
  }
};
export default apiCall;
