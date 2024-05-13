import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Header from '../Header-self';
import Expbar from './Expbar';
import { useSelector,shallowEqual } from 'react-redux';
import Pet from './Pet';
import PointsButton from './PointsButton';
import { useIsFocused } from '@react-navigation/native';
export default function PetPage({ route, navigation }) {
  const user_monster=useSelector(state=>state.userData.user_monster,shallowEqual)
  const user_item=useSelector(state=>state.userData.user_item,shallowEqual)
  const isFocused = useIsFocused();//it is need to refresh the page
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
                <PointsButton mode={1} navigation={navigation} />
              </View>
            </View>
            <View style={styles.button_container}>
              <View style={styles.pet_home}>
              </View>
              <View style={styles.point_outline}>
                <PointsButton mode={2} navigation={navigation}/>
              </View>
            </View>
            <View style={styles.monster}>
              <Pet monster={user_monster} item={user_item} />
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
