import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from '../context/authProvider';
import BottomTabsNavigator from '../components/bottomTabsNavigator';
import LoginScreen from '../screens/login';

const Stack = createStackNavigator();

function MainNavigator() {
    const { isLoggedIn } = useAuth();

    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Screen name="HomeTabs" component={BottomTabsNavigator} options={{ headerShown: false }} />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
}

export function NavigationProvider() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}
