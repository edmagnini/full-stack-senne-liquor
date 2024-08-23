import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home';
import GeoLocationScreen from '../screens/geoLocation';
import LoginScreen from '../screens/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {

    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Maps') {
                        iconName = focused ? 'map' : 'map-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Maps" component={GeoLocationScreen} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeTabs"
                component={BottomTabsNavigator}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <Button
                            onPress={async () => {
                                await AsyncStorage.removeItem('@senne:accessToken');
                                await AsyncStorage.removeItem('@senne:refreshToken');
                                navigation.navigate('Login');
                            }}
                            title="Logout"
                            color="#EC6726"
                            style={{
                                height: Dimensions.get('window').height / 10, 
                                width: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 10,
                                borderRadius: 10,
                                backgroundColor: '#f0f0f0',
                                elevation: 3,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 3,
                            }}
                        />
                    ),
                    headerTitle: 'My App',
                })}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}
