import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image } from 'react-native';

export default function Header({ mode, navigation }) {
    return (
        <ImageBackground style={styles.header} source={require('../assets/headerBack.png')}>
            <View style={styles.headerIcon_space}>
                {mode ? <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.BackIcon}
                        source={require("../assets/back-2.png")}
                    />
                </TouchableOpacity> : <View />}
            </View>
            <View style={styles.center_space}>
                <View style={styles.badge_space}>
                    <Image style={{
                        flex: 1,
                        resizeMode: 'contain',
                    }} source={require('../assets/badge.png')} />
                </View>
            </View>
            <View style={styles.headerIcon_space}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 125,
        // backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        flexDirection: 'row'
    },
    headerIcon_space: {
        height: '100%',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: '5%',
        zIndex: 1 //move to the top of the screen make the user can successfully press the button
    },
    center_space: {
        height: '100%',
        width: '50%',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge_space: {
        marginTop: 30,
        width: 120,
        height: 60,
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    BackIconContainer: {
        position: "absolute",
        top: -40,
        left: -158,
        zIndex: 1
    },
    BackIcon: {
        width: 25,
        height: 32,
    },

});
