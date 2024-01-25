import {Image, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import NavBar from "./src/components/NavBar";
import MainTitle from "./src/components/MainTitle";
import Button from "./src/components/Button";
import {LinearGradient} from "expo-linear-gradient";
import cartLogo from "./assets/cart.png";
export default function App() {
    return (
        <View style={{flex:1}}>
            <Text>CARRITO</Text>
            <Image source={cartLogo}/>
            <Text>Pantalon</Text>
            <Text>Caramelo de DDL</Text>
            <Text>RTX 4090</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Opacity</Text>
                </TouchableOpacity>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.text}>Highlight</Text>
                </TouchableHighlight>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Pressable</Text>
                </Pressable>
            </View>
            <TextInput style={{borderColor: "black", borderRadius: 10, borderWidth: 1, padding: 10, fontSize: 20, margin: 10}} placeholder="Text Input"/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    button: {
        backgroundColor: '#ededed',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        fontSize: 20
    }
});
