import { Alert, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import data from '../assets/data/2-crash.json'

export default function LecturaScreen() {
    const [lista, setlista] = useState({})

    useEffect(() => {
        setlista(data)
        console.log(lista)

    }, [lista])

    function info(data: any) {
        Alert.alert("Mensaje", data)
    }

    return (
        <View>
            <Text>LecturaScreen</Text>
            <View style={styles.flatl}>
                <FlatList
                    data={lista.personajes}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity onPress={() => info(item.description)}>
                                <Text>{item.name}</Text>
                                <Image source={{ uri: item.image }} style={styles.img} />
                            </TouchableOpacity>
                        </View>

                    )}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 100,

    },
    flatl: {
        height: 600
    }
})