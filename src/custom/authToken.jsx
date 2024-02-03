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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    console.log(error);

    const originalRequest = config;

    // localStorage.removeItem('accessToken');
    // location.reload();

    if (status === 401) {
      console.log('토큰 만료');

      /* try {
        const { data } = await axios.post(
          'http://localhost:8080/auth/reissue',
          {
            accessToken: localStorage.getItem('accessToken'),
            refreshToken: localStorage.getItem('refreshToken'),
          },
        );

        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;

        originalRequest.headers['Authorization'] = 'Bearer' + newAccessToken;

        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        return await axios(originalRequest);
      } catch (err) {
        new Error(err);
      } */
    }

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'accessToken',
    )}`;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
