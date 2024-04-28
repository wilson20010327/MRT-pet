import { StyleSheet, Text, View, Image } from 'react-native';
export default function TabBarIcon3(focused) {
    return (
        <View style={styles.container}>
            <View style={focused.focused ? styles.container_clicked : styles.container_unclicked}>
                <Image style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                }} source={focused.focused ? require('../../assets/home-clicked.png') : require('../../assets/home-unclicked.png')} />
            </View>
            <View style={styles.text_outline}>
                <Text style={styles.innerText}>首頁</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: -25,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_clicked: {
        width: 50,
        height: 50,
        backgroundColor: '#077AC2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        borderWidth: 5,
        borderColor: '#DCDADA'
    },
    container_unclicked: {
        width: 50,
        height: 50,
        backgroundColor: '#DCDADA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        borderWidth: 5,
        borderColor: '#077AC2'
    },
    text_outline:{
        top:5,
        width: 50,
        height: 20,
        backgroundColor: '#077AC2',
        alignItems: 'center',
    },
    innerText: {
        color: 'white',
        fontSize: 10
    },

});
