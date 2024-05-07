import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
export default function PointsButton({ mode = 0, navigation, user_monster, user_item }) {
    return (
        <View style={styles.container}>
            {mode == 0 ?
                <View style={styles.point_outline}>
                    <Text style={styles.innerText}>23</Text>
                </View> : mode == 1 ? <Text style={styles.innerText}>優惠券</Text> : <Text style={styles.innerText}>我的票券</Text>}

            <TouchableOpacity onPress={() =>
                (mode == 0) ? navigation.navigate('PetHome', {
                    user_monster: user_monster,
                    user_item: user_item,
                }) : null
            }>
                <View style={styles.button}>
                    <Image style={{
                        width: 55,
                        height: 55,
                        resizeMode: 'contain',
                    }} source={mode == 0 ? require('../../assets/point.png') : mode == 1 ? require('../../assets/coupon.png') : require('../../assets/ticket.png')} />
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
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        width: 60,
        height: 60,
    },
    point_outline: {
        width: 50,
        height: 30,
        borderRadius: '30%',
        backgroundColor: '#019A78',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1
    },
    innerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        // fontFamily: 'Cochin',
        // fontStyle:'italic'
    },

});
