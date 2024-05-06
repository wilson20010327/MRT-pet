import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Header from '../Header-self';
import { useState } from 'react';
export default function PetHome({ navigation }) {
  const [item_type, setItem_type] = useState(0)
  return (
    <View style={styles.container}>
      <Header mode={true} navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.pet_container}>
          <ImageBackground style={styles.background_container} resizeMode='cover' source={require('../../assets/metro-background.png')} ></ImageBackground>
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
              <TouchableOpacity style={styles.save_button}>
                <Text style={styles.innerText}>保存</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.skin_container}>
            
          </View>
        </View>
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
  background_container: {
    width: '100%',
    height: '120%',
    alignItems: 'center',
  },
  pet_container: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  item_container: {
    width: '100%',
    height: '40%',
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
});
