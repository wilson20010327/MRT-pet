import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image,ImageBackground } from 'react-native';
const monster_list=[
  require('../../assets/monster.png'),
  require('../../assets/monster1.png')
]
const hat_list=[
  require('../../assets/hat1.png'),
  require('../../assets/hat2.png'),
  require('../../assets/hat3.png'),
  require('../../assets/hat4.png'),
  require('../../assets/hat5.png'),
  require('../../assets/hat6.png'),
  require('../../assets/hat7.png')
]
export default function Pet({ monster=0,item=8 }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={{ width: '100%',height: '100%',alignItems:'center'}} resizeMode='contain' source={monster_list[monster]} >
        {(item!=8)?<View style={styles.hat_container}>
          <Image style={styles.container}resizeMode='contain' source={hat_list[item]}/>
        </View>:<View/>}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  hat_container: {
    top:'60%',
    width: '20%',
    height: '20%',
    alignItems: 'center',
    // backgroundColor:'red',
    transform: [{ rotate: '-30deg'}]
  },
});
