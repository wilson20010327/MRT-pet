import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';
import Header from './component/Header-self';
import Expbar from './component/pet/Expbar';
import PethomeButton from './component/pet/PethomeButton';
import PointsButton from './component/pet/PointsButton';
export default function PetPage() { 
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.ad_container}></View>
      <View style={styles.pet_container}>
        <ImageBackground style={styles.container} resizeMode='contain'source={ require('./assets/metro-background.png')} >
          <View style={styles.container}>
            <View style={styles.exp_container}>
              <Expbar percentage='50%' lv={10} />
            </View>
            <View style={styles.button_container}>
              <View style={styles.pet_home}>
                <PethomeButton/>
              </View>
              <View style={styles.point_outline}>
                <PointsButton/>
              </View>
            </View>
            <Image style={styles.monster} resizeMode='contain'source={ require('./assets/monster.png')}/>
          </View>
        </ImageBackground>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    alignItems: 'center',
  },
  ad_container: {
    width:'100%',
    height: '20%',
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  pet_container: {
    width:'100%',
    height: '80%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  monster: {
    width:'100%',
    height: '60%',
    bottom: 50,
    alignItems: 'center',
  },
  exp_container: {
    top:5,
    width:'100%',
    height: '12%',
  },
  button_container: {
    width:'85%',
    height: '25%',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between'
  },
  pet_home: {
    width:60,
    height: 60,
    // backgroundColor: 'white',
  },
  point_outline: {
    width:180,
    height: 60,
    // backgroundColor: 'white',
  },
});
