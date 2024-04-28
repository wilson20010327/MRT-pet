import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
export default function PointsButton() {
    return (
        <View style={styles.container}>
            <View style={styles.point_outline}>
                <Text style={styles.innerText}>23</Text>
            </View>
            <TouchableOpacity >
                <View style={styles.button}>
                    <Image style={{
                        width: 60,
                        height: 60,
                        resizeMode: 'contain',
                    }} source={require('../../assets/point.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        width: 60,
        height: 60,
    },
    point_outline:{
        left:15,
        width: 100,
        height: 30,
        borderRadius:'30%',
        backgroundColor:'#FFA511',
        alignItems: 'center',
        justifyContent:'center'
    },
    innerText: {
        color: 'white',
        textAlign:'center',
        fontSize:20,
        fontFamily: 'Cochin',
        fontStyle:'italic'
      },

});
