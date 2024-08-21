import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import { FlashList } from '@shopify/flash-list';
import { apiUrl } from '../global/apiUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
    const [chamados, setChamados] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const token = await AsyncStorage.getItem('@senne:accessToken');
                const response = await axios.get(`${apiUrl}/chamado`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                setChamados(response.data);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch data');
            }
        }
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text>Número do chamado: {item.NR_CHAMADO}</Text>
            <Text>Nome do hospital: {item.HOSPITAL_NOME}</Text>
            <Text>Nome do paciente: {item.NM_PACIENTE}</Text>
            <Text>Status: {item.IE_STATUS_CHAMADO}</Text>
            <Text>Tipo do chamado: {item.IE_TIPO_CHAMADO}</Text>
            <Text>Hospital latitude: {item.HOSPITAL_LATITUDE}</Text>
            <Text>Hospital longitude: {item.HOSPITAL_LONGITUDE}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlashList
                data={chamados}
                renderItem={renderItem}
                keyExtractor={(item) => item.NR_CHAMADO.toString()}
                estimatedItemSize={100}
            />
        </View>
    );
}
