import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import NavBar from "./src/components/NavBar";
import MainTitle from "./src/components/MainTitle";
import Button from "./src/components/Button";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["rgba(255,252,38,0.82)", "#963ecc"]}
                style={styles.background}
            >
                <NavBar/>
                <MainTitle/>
                <Button />
                <StatusBar hidden/>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 0
    },
    background: {
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
        flex: 1
    }
});
