import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Header from '../Header-self';
import Expbar from './Expbar';
import PethomeButton from './PethomeButton';
import PointsButton from './PointsButton';
export default function PetPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Header mode={true} navigation={navigation} />
      <View style={styles.pet_container}>
        <ImageBackground style={styles.container} resizeMode='cover' source={require('../../assets/metro-background.png')} >
          <View style={styles.container}>
            <View style={styles.exp_container}>
              <Expbar percentage='50%' lv={10} />
            </View>
            <View style={styles.button_container}>
              <View style={styles.pet_home}>
                {/* <PethomeButton /> */}
              </View>
              <View style={styles.point_outline}>
                <PointsButton mode={0} navigation={navigation}/>
              </View>
            </View>
            <View style={styles.button_container}>
              <View style={styles.pet_home}>
              </View>
              <View style={styles.point_outline}>
                <PointsButton mode={1}/>
              </View>
            </View>
            <View style={styles.button_container}>
              <View style={styles.pet_home}>
              </View>
              <View style={styles.point_outline}>
                <PointsButton mode={2}/>
              </View>
            </View>
            <View style={styles.monster}>
              <Image style={{flex: 1}} resizeMode='contain' source={require('../../assets/monster.png')} />
            </View>
            <View style={styles.train}>
              <Image style={{ flex: 1 }} resizeMode='contain' source={require('../../assets/Train.png')} />
            </View>
          </View>
        </ImageBackground>
      </View>
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
  pet_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monster: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
  },
  train: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
  },
  exp_container: {
    top: 5,
    width: '100%',
    height: '12%',
  },
  button_container: {
    width: '85%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor:'white'
  },
  pet_home: {
    width: 60,
    height: 60,
    // backgroundColor: 'white',
  },
  point_outline: {
    width: 180,
    height: 60,
    // backgroundColor: 'white',
  },
});
