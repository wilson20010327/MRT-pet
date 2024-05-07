import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from '../Header-self';
import { useState } from 'react';
import Pet from './Pet';
const monster__list = [
  {
    id: 0,
    // title: 'jack',
    image_path: require('../../assets/monster.png'),
  },
  {
    id: 1,
    // title: 'tom',
    image_path: require('../../assets/monster1.png')
  },
];
const item__list = [
  {
    id: 0,
    // title: 'fff',
    image_path: require('../../assets/hat1.png'),
  },
  {
    id: 1,
    // title: 'fff',
    image_path: require('../../assets/hat2.png'),
  },
  {
    id: 2,
    // title: 'fff',
    image_path: require('../../assets/hat3.png'),
  },
  {
    id: 3,
    // title: 'fff',
    image_path: require('../../assets/hat4.png'),
  },
  {
    id: 4,
    // title: 'fff',
    image_path: require('../../assets/hat5.png'),
  },
];
export default function PetHome({ route, navigation }) {
  var { user_monster, user_item} = route.params;
  const [cur_monster, setcur_monster] = useState(user_monster)
  const [cur_item, setcur_item] = useState(user_item)
  const [temp_monster, settemp_monster] = useState(user_monster)
  const [temp_item, settemp_item] = useState(user_item)
  const [item_type, setItem_type] = useState(0)
  return (
    <View style={styles.container}>
      <Header mode={true} navigation={navigation}/>
      <View style={styles.container}>
        <View style={styles.pet_container}>
          <ImageBackground style={styles.background_container} resizeMode='cover' source={require('../../assets/metro-background.png')} >
            <View style={{height:'40%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Pet monster={temp_monster} item={temp_item}/>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.item_container}>
          <View style={styles.button_container}>
            <View style={styles.type_container}>
              <TouchableOpacity style={(item_type == 0) ? styles.type_button_clicked : styles.type_button_unclicked}
                onPress={() => {
                  setItem_type(0)
                }}
              >
                <Text style={styles.innerText}>小怪獸</Text>
              </TouchableOpacity >
              <TouchableOpacity style={(item_type == 1) ? styles.d_button_clicked : styles.d_button_unclicked}
                onPress={() => {
                  setItem_type(1)
                }}
              >
                <Text style={styles.innerText}>小裝飾</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.setting_container}>
              <TouchableOpacity style={styles.save_button} onPress={()=>{
                setcur_monster(temp_monster), setcur_item(temp_item),console.log(cur_monster)
              }}>
                <Text style={styles.innerText}>保存</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.skin_container}>
            <FlatList
              horizontal={true}
              style={styles.flat_container}
              data={item_type == 0 ? monster__list : item__list}
              renderItem={({ item }) =>
                <Skin_element item={item} item_type={item_type} settemp_monster={settemp_monster} settemp_item={settemp_item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
function Skin_element({ item, item_type, settemp_monster, settemp_item }) {
  return (
    <TouchableOpacity style={styles.skin_item} onPress={() => {
      (item_type == 0) ? settemp_monster(item.id) : settemp_item(item.id)
    }}>
      <Image style={{
        width: '100%',
        height: '100%',
      }} resizeMode='contain' source={item.image_path} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  skin_item: {
    margin: 10,
    width: 80,
    height: 80,
    // alignSelf: 'center',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background_container: {
    width: '100%',
    height: '120%',
    alignItems: 'center',
    justifyContent:'center'
  },
  pet_container: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  item_container: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%'
  },
  button_container: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  skin_container: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    backgroundColor: '#b2d7e7',
  },
  type_container: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    // backgroundColor: 'black',
    borderTopLeftRadius: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  setting_container: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    borderTopRightRadius: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  save_button: {
    right: '30%',
    width: '45%',
    height: '60%',
    alignItems: 'center',
    backgroundColor: '#b2d7e7',
    borderRadius: '50%',
    justifyContent: 'center'
  },
  type_button_clicked: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#b2d7e7',
    borderTopLeftRadius: '30%',
    justifyContent: 'center'
  },
  type_button_unclicked: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#e5f1f7',
    borderTopLeftRadius: '50%',
    justifyContent: 'center'
  },
  d_button_clicked: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#b2d7e7',
    justifyContent: 'center'
  },
  d_button_unclicked: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#e5f1f7',
    justifyContent: 'center'
  },
  innerText: {
    color: '#007ab0',
    fontSize: 15
  },
  flat_container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
});
