import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Header from '../Header-self';
export default function CouponPage({ route,navigation }) {
  return (
    <View style={styles.container}>
      <Header mode={1} navigation={navigation}/>
      <Image style={styles.container} resizeMode='contain' source={require('../../assets/coupon.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});