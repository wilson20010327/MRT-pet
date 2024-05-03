import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ImageBackground, Image } from 'react-native';

export default function Header({mode,navigation}) {
    return (
        <ImageBackground style={styles.header} source={require('../assets/headerBack.png')}>
            <View style={styles.headerIcon_space}>
                {mode?<Button  title='back' onPress={() => navigation.goBack()}/>:<View/>}
            </View>
            <View style={styles.center_space}>
                <View style={styles.badge_space}>
                    <Image style={{
                        flex:1,
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
        justifyContent:'center',
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
        marginTop:30,
        width: 120,
        height: 60,
        // backgroundColor: 'red',
        alignItems: 'center',
    },

});
