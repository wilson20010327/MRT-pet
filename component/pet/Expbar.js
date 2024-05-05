import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
export default function Expbar(prop) {
    return (
        <View style={styles.container}>
            <View style={styles.bar_outline}>
                <View style={{
                    width: prop.percentage,
                    height: '100%',
                    alignItems: 'left',
                    backgroundColor: 'green',
                    borderRadius: '50%'
                }} ></View>
                <View style={styles.foot_outline}>
                    <Image style={styles.container} resizeMode='contain' source={require('../../assets/footprints.png')} />
                </View>
            </View>
            <View style={styles.level_outline}>
                <ImageBackground style={styles.container} resizeMode='contain' source={require('../../assets/lvbackground.png')} >
                    <Text style={styles.innerText}>LV {prop.lv}</Text>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'black',
        flexDirection: 'row'
    },
    bar_outline: {
        left: -10,
        width: '55%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'left',
        // backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: '50%',
        flexDirection: 'row'
    },
    level_outline: {
        left: 10,
        width: '15%',
        height: '75%',
        alignItems: 'center',
        // backgroundColor: 'white',
    },
    foot_outline: {
        left: -30,
        width: 60,
        height: 60,
        alignItems: 'center',
        // backgroundColor: 'white',
    },
    innerText: {
        color: 'white',
      },
});
