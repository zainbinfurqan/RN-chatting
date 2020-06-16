import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, Button, Text, ScrollView } from 'react-native'



function UserList(props) {

    let [userList, setUserList] = useState([])


    async function FetchUserList() {
        const response = await fetch('');
        const json = await response.json();
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={userList}
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.8} style={{ margin: 20, height: 70, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>{item.firstname}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ScrollView >
    )
}

export default UserList;

