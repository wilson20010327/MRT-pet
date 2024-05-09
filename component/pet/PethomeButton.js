import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
export default function PethomeButton(focused) {
    return (
        <TouchableOpacity >
            <View style={styles.container}>
                <Image style={{
                    width: 60,
                    height: 60,
                    resizeMode: 'contain',
                }} source={require('../../assets/pethome.png')} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

});
