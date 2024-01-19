import {Pressable, Text, StyleSheet, View, ToastAndroid} from 'react-native'
export default function Button(props) {
    const handlePress = () => {
        ToastAndroid.showWithGravity(
            "Hello There",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        )
    }
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={handlePress}
                android_ripple={{color: "rgba(0,0,0, 0.2)", radius: 100}}
            >
                <Text style={styles.text}>Press me</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        paddingBottom: 90,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    button: {
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: "white"
    }
})
