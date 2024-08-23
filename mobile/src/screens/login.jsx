import { MaterialIcons, Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/logo-senne-liquor.svg';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { apiUrl } from '../global/apiUrl';
import { themas } from "../global/themes";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()


    async function handleSignIn() {
        try {
            let body = { email, senha };
            let response = await axios.post(`${apiUrl}/usuario/login`, body);
            await AsyncStorage.setItem("@senne:accessToken", response.data.accessToken);
            await AsyncStorage.setItem("@senne:refreshToken", response.data.refreshToken);
            navigation.navigate('HomeTabs');
        } catch (error) {
            alert('Error details:', error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Logo width={150} height={150} />
                <Text style={styles.text}>Bem vindo de volta!</Text>
            </View>
            <View style={styles.boxMid}>
                <Input
                    title="ENDEREÇO E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                    onIconRigthPress={() => console.log('OLA')}
                />
                <Input
                    title="SENHA"
                    value={senha}
                    onChangeText={setSenha}
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={showPassword}
                />
            </View>
            <View style={styles.boxBottom}>
                <Button text="ENTRAR" loading={loading} onPress={handleSignIn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themas.Colors.lightGray,
        backgroundColor: themas.Colors.bgScreen,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 40
    },
    text: {
        marginTop: 35,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
    },
    boxIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    titleInput: {
        marginLeft: 5,
        color: themas.Colors.gray,
        marginTop: 20
    },
    textBottom: {
        fontSize: 16,
        color: themas.Colors.gray
    },
    textBottomCreate: {
        fontSize: 16,
        color: themas.Colors.primary
    }
})
