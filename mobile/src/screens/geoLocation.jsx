import { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useGeoLocation from '../components/useGeoLocation';

export default function GeoLocationScreen() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const location = useGeoLocation();

    useEffect(() => {
        if (location && location.coords) {
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
        }
    }, [location]);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {latitude && longitude && (
                <MapView
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    style={{ flex: 1, width: '100%' }}
                >
                    <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude
                        }}
                    />
                </MapView>
            )}
        </View>
    );
}
