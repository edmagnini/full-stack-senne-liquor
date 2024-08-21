import { useEffect } from 'react';
import { apiUrl } from '../constants/api-url';
import axios from 'axios';

export const useAxiosInterceptor = () => {
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('senneToken');
        if (token) {
          config.headers.Authorization = `${token}`;
        }
        return config;
      },
      (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );
    
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const refreshToken = localStorage.getItem('refreshToken');
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            console.log('Attempting to refresh token...');
            const { data } = await axios.post(`${apiUrl}/refresh-token`, {refreshToken: refreshToken});
            const newToken = data.token;
            localStorage.setItem('senneToken', newToken);
            axios.defaults.headers.common['Authorization'] = `${newToken}`;
            originalRequest.headers['Authorization'] = `${newToken}`;

            return axios(originalRequest);
          } catch (refreshError) {
            console.error('Token refresh error:', refreshError);
            localStorage.removeItem('senneToken');
            window.location.href = '/login'; 
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
};
