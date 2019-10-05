import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    async function handleSubmit(){
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        console.log(_id);
    }

    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={logo} />

        <View style={styles.form}>
            <Text style={styles.label}>E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor='#999'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

            <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnoloias de interesse"
                    placeholderTextColor='#999'
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />
            
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text styles={styles.buttonText}>Encontar spots</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label : {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    }, 

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});