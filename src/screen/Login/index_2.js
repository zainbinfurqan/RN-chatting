import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native'


function Login(props) {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')



    async function LoginUser() {
        let option = {
            method: "POST",
            body: email, password,
            herder: {}
        };
        const response = await fetch('', option);
        const json = await response.json()
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={{ margin: 20 }}>
                <Text>Email</Text>
                <TextInput value={email} onChangeText={(e) => { setEmail(e) }} />
            </View>

            <View style={{ margin: 20 }}>
                <Text>Password</Text>
                <TextInput value={password} onChangeText={(e) => { setPassword(e) }} />
            </View>

            <View style={{ margin: 20 }}>
                <Button title='Login' onPress={LoginUser} />
            </View>
        </View>
    )
}


export default Login;