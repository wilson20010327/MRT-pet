import { StyleSheet, Text, View, Image } from 'react-native';
export default function TabBarIcon1(focused) {
    return (
        <View style={styles.container}>
            <Image style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                
            }} source={ focused.focused?require('../../assets/petIcon-clicked.png'):require('../../assets/petIcon-unclicked.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:20
    },
    
});
