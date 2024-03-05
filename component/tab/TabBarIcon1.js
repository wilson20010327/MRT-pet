import { StyleSheet, Text, View, Image } from 'react-native';
export default function TabBarIcon1(focused) {
    return (
        <View style={focused.focused?styles.container_clicked:styles.container_unclicked}>
            <Image style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
            }} source={ focused.focused?require('../../assets/petIcon-clicked.png'):require('../../assets/petIcon-unclicked.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container_clicked: {
        width:132,
        height:70,
        backgroundColor: '#DCDADA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    container_unclicked: {
        width:132,
        height:70,
        backgroundColor: '#4C4C4C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    
});
