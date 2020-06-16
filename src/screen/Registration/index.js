import React, { useState } from 'react'
import { View, Text, ScrollView, Button, TextInput } from 'react-native'


function Registration(props) {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')

    async function Registration() {

        try {
            console.log(email)
            const body = {
                email: email, password: password, firstName: firstName, lastName: lastName
            }
            console.log(body)
            let options = {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let response = await fetch('https://secret-taiga-19292.herokuapp.com/api/createUser', options);
            let json = await response.json();
            console.log(json)
        } catch (error) {
            console.log(error.message)
        }

    }

    function onChangeText(e) {
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: 50, margin: 20 }}>
                <Text>Email</Text>
                <TextInput style={{ height: 50, borderWidth: 1, }} onChangeText={(e) => setEmail(e)} value={email} />
            </View>
            <View style={{ height: 50, margin: 20 }}>
                <Text>Password</Text>
                <TextInput style={{ height: 50, borderWidth: 1, }} onChangeText={(e) => setPassword(e)} value={password} />
            </View>
            <View style={{ height: 50, margin: 20 }}>
                <Text>First Name</Text>
                <TextInput style={{ height: 50, borderWidth: 1, }} onChangeText={(e) => setFirstName(e)} value={firstName} />
            </View>
            <View style={{ height: 50, margin: 20 }}>
                <Text>Last Name</Text>
                <TextInput style={{ height: 50, borderWidth: 1, }} onChangeText={(e) => setLastName(e)} value={lastName} />
            </View>
            <View style={{ margin: 20 }}>
                <Button title="Login" onPress={Registration} />
            </View>
        </View>
    )
}

export default Registration;