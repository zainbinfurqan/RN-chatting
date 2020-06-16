import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native'


function Registration(props) {

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    async function RegistrationUser() {
        let option = {
            method: "POST",
            body: firstName, lastName, email, password,
            herder: {}
        };
        const response = await fetch('', option);
        const json = await response.json()
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ margin: 20 }}>
                <Text>First Name</Text>
                <TextInput value={firstName} onChangeText={(e) => { setFirstName(e) }} />
            </View>

            <View style={{ margin: 20 }}>
                <Text>Last Name</Text>
                <TextInput value={lastName} onChangeText={(e) => { setLastName(e) }} />
            </View>

            <View style={{ margin: 20 }}>
                <Text>Email</Text>
                <TextInput value={email} onChangeText={(e) => { setEmail(e) }} />
            </View>

            <View style={{ margin: 20 }}>
                <Text>Password</Text>
                <TextInput value={password} onChangeText={(e) => { setPassword(e) }} />
            </View>

            <View style={{ margin: 20 }}>
                <Button title='Registration' onPress={RegistrationUser} />
            </View>
        </View>
    )
}


export default Registration;