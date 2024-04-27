import { StyleSheet, Text, View, Image } from 'react-native';
export default function Expbar(prop ) {
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

                </View>
            </View>
            <View style={styles.level_outline}></View>
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
        justifyContent:'left',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: '50%',
        flexDirection: 'row'
    },
    level_outline: {
        left: 10,
        width: '15%',
        height: '75%',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    foot_outline: {
        left:-5,
        width: 40,
        height: 40,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
