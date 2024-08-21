import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure this is installed
import { getCurrentPositionAsync, LocationAccuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { apiUrl } from '../global/apiUrl';

export default function useGeoLocation() {
    const [location, setLocation] = useState(null);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
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
                async (response) => {
                    try {
                        const token = await AsyncStorage.getItem('@senne:accessToken');
                        if (token) {
                            const res = await axios.post(`${apiUrl}/usuario/send-location`, {
                                latitude: response.coords.latitude,
                                longitude: response.coords.longitude,
                            }, {
                                headers: {
                                    'Authorization': `${token}`
                                }
                            });
                        }
                    } catch (error) {
                        console.error("Failed to send location:", error);
                    }
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

    return location;
}
