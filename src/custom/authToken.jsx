import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});

const postRefreshToken = async () => {
  const response = await axiosInstance.post(
    'http://localhost:8080/auth/reissue',
    {
      refreshToken: localStorage.getItem('refreshToken'),
    },
  );

  return response;
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    const msg = error.message;
    // const status = error.response.status;

    console.log(error);

    if (status === 401) {
      if (msg == '토큰의 유효기간이 만료되었습니다') {
        const response = await postRefreshToken();

        if (status === 200) {
          const newAccessToken = response.data.token;
          localStorage.setItem('accessToken', response.data.token);
          localStorage.setItem('refreshToken', response.data.refreshToken);

          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originalConfig.headers['Authorization'] = `Bearer ${newAccessToken}}`;

          return axios(originalConfig);
        }
      } else if (msg == 'refresh token expired') {
        localStorage.clear();
        alert('토큰이 만료되어 자동으로 로그아웃 되었습니다');
      }
    }
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'accessToken',
    )}`;

    // console.log(request);
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  },
);
