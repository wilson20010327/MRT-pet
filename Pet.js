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
  header: {
    width:'100%',
    height: 125,
    // backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    flexDirection: 'row'
  },
  headerIcon_space:{
    height:'100%',
    width:'25%',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  center_space:{
    height:'100%',
    width:'50%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  content_space: {
    width:'100%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
