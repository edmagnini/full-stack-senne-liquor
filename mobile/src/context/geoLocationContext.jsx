import React, { createContext, useState, useEffect } from 'react';
import { getCurrentPositionAsync, LocationAccuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export const GeoLocationContext = createContext();

export const GeoLocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const requestLocationPermission = async () => {
            const { granted } = await requestForegroundPermissionsAsync();
            if (granted) {
                const currentPosition = await getCurrentPositionAsync();
                setLocation(currentPosition);
            }
        };

        requestLocationPermission();
    }, []);

    useEffect(() => {
        let subscription;
        const startWatching = async () => {
            subscription = await watchPositionAsync(
                {
                    accuracy: LocationAccuracy.Highest,
                    timeInterval: 1000,
                    distanceInterval: 1
                },
                (response) => {
                    setLocation(response);
                }
            );
        };

        startWatching();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, []);

    return (
        <GeoLocationContext.Provider value={{ location }}>
            {children}
        </GeoLocationContext.Provider>
    );
};
