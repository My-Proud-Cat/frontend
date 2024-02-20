import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
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
    request.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'accessToken',
    )}`;

    // console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
