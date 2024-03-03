import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Header from './component/Header-self';
export default function PetPage() {
  return (
    <View style={styles.container}>
      <Header/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
