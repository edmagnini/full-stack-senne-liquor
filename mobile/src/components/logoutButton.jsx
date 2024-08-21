import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { AuthContext } from '../context/authProvider';
import { useNavigation } from '@react-navigation/native';

export default function LogoutButton() {
    const { setAccessToken } = useContext(AuthContext);
    const navigation = useNavigation()

    const handleLogout = async () => {
        await AsyncStorage.removeItem('@senne:accessToken');
        await AsyncStorage.removeItem('@senne:refreshToken');
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You are logged in!</Text>
            <Button title="Log Out" onPress={handleLogout} />
        </View>
    );
}
