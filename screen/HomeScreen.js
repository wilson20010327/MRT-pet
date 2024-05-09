import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';
import Header from '../component/Header-self';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header/>
      <Image style={styles.container} resizeMode='contain' source={require('../assets/home.png')} />
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
