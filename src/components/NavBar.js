import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function NavBar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.app_name}>My App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flex: 0.2,
        paddingLeft: 10,
        display: "flex",
        justifyContent: "center",
        borderBlockColor: "#000",
        borderBottomWidth: 2,
        zIndex: 2,
    },
    app_name: {
        fontSize: 30,
        fontWeight: "bold"
    }
})
