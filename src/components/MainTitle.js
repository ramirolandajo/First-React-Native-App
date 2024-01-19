import {View, Text, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient";

export default function MainTitle() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.title}>Coderhouse!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
    },
    container: {
        flex: 2
    }
})
