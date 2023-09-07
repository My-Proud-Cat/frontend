import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
});

const postRefreshToken = async () => {
  const response = await axiosInstance.post('auth/login', {
    refreshToken: localStorage.getItem('refreshToken'),
  });

  return response;
};

axiosInstance.interceptors.response.use((response) => {
  return response;
});

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers['Content-Type'] = 'application/json';
    request.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'accessToken',
    )}`;

    // console.log(request.headers);

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);
