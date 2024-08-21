import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl } from '../global/apiUrl';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkAuthStatus = useCallback(async () => {
        const storedAccessToken = await AsyncStorage.getItem('@senne:accessToken');
        const storedRefreshToken = await AsyncStorage.getItem('@senne:refreshToken');

        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const refreshAccessToken = useCallback(async () => {
        if (!refreshToken) return;

        try {
            const response = await axios.post(`${apiUrl}/refresh-token`, {refreshToken: `${refreshToken}`});

            const newAccessToken = response.data.accessToken;
            await AsyncStorage.setItem('@senne:accessToken', newAccessToken);
            setAccessToken(newAccessToken);
        } catch (error) {
            console.error("Failed to refresh access token:", error);
            logOut();
        }
    }, [refreshToken]);

    const logOut = async () => {
        await AsyncStorage.removeItem('@senne:accessToken');
        await AsyncStorage.removeItem('@senne:refreshToken');
        setAccessToken(null);
        setRefreshToken(null);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);

    useEffect(() => {
        if (accessToken) {
            const interval = setInterval(() => {
                refreshAccessToken();
            }, 1000 * 60 * 10);

            return () => clearInterval(interval);
        }
    }, [accessToken, refreshAccessToken]);

    return (
        <AuthContext.Provider value={{ accessToken, isLoggedIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
