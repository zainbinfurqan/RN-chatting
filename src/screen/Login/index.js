import React, { } from 'react'
import { View, Text, ScrollView, Button, TextInput } from 'react-native'


function Login(props) {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    async function Login() {
        const body = {
            email, password,
        }
        let options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = await fetch('https://secret-taiga-19292.herokuapp.com/api/login', options);
        let json = await response.json();
        console.log(json)
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
            <View style={{ margin: 20 }}>
                <Button title="Login" onPress={Login} />
            </View>
        </View>
    )
}

export default Login;