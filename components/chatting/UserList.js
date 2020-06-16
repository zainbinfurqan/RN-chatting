import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';


function UserList(props) {

    let [userList, setUserList] = useState([])

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        let response = await fetch('https://secret-taiga-19292.herokuapp.com/api/getUsers');
        const json = await response.json();
        console.log(json)
        setUserList(json);
    }

    async function goToChatHandle(otherUser) {
        try {
            const body = {
                sender: props.userData._id,
                receiver: otherUser._id,
            };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            };
            const response = await fetch(
                `https://arcane-waters-35831.herokuapp.com/api/chat/room`,
                options,
            );
            const json = await response.json();
            if (response.status !== 200) {
                throw new Error(json.message);
            }
            props.setChatRoom(json.room);
            props.navigation.navigate('Chat', { otherUser: otherUser });
        } catch (error) {
            props.apiResponse(error.message, 'error');

        }

    }


    return (
        <ScrollView style={{ flex: 1 }}>
            <FlatList
                data={userList}
                renderItem={({ item }) => <TouchableOpacity onPress={() => { goToChatHandle(item) }} style={{
                    height: 100,
                    borderWidth: 1, margin: 10,
                    borderRadius: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{ borderWidth: 1, flex: 0.3 }}></View>
                    <View style={{ borderWidth: 1, flex: 0.7 }}>
                        <Text>{item.firstName}</Text>
                    </View>
                </TouchableOpacity>}
                keyExtractor={item => item.id}
            />

        </ScrollView>
    )
}

export default UserList
