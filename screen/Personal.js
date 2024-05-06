import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../component/Header-self';
import PetPage from '../component/pet/Pet';
const Stack = createNativeStackNavigator();
const List = [
  {
    id: 1,
    title: '北捷小寵物',
    image_path: require('../assets/monster.png')
  },
  {
    id: 2,
    title: '修改密碼',
    image_path: require('../assets/modify-password.png')
  },
  {
    id: 3,
    title: '會員服務條款',
    image_path: require('../assets/treaty.png')
  },
  {
    id: 4,
    title: '聯絡我們',
    image_path: require('../assets/phone.png')
  },
  {
    id: 5,
    title: '會員帳號',
    image_path: require('../assets/account.png')
  },
];
export default function PersonalPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="PetHome" 
        component={PetPage} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.flat_container}
        data={List}
        renderItem={({ item }) => <Simple_element item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
      {/* <Button title='test'
        onPress={() =>
          navigation.navigate('PetHome')
        } /> */}
      <StatusBar style="auto" />
    </View >
  )
}
function Simple_element({ item, navigation }) {
  return (
    <TouchableOpacity style={styles.element_outline}
      onPress={() =>
        navigation.navigate('PetHome')
      }>
      <View style={styles.element}>
        <Image style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }} source={item.image_path} />
        <View style={styles.word}>
          <Text style={styles.innerText}>{item.title}</Text>
        </View>
        <View style={styles.next}>
          <Text style={styles.innerText}>{'>'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  flat_container: {
    width: '100%',
    height: '100%',
  },
  element_outline: {
    width: '100%',
    height: 70,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  element: {
    width: '80%',
    height: 70,
    // backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  word: {
    left: 10,
    width: '60%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'left',
  },
  next: {
    width: 30,
    height: 30,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'left',
  },
  innerText: {
    color: 'black',
    fontSize: 20
  },
});
