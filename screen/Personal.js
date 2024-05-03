import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../component/Header-self';
import PetPage from '../component/pet/Pet';
const Stack = createNativeStackNavigator();
export default function PersonalPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PetHome" component={PetPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text>This is the Personal page</Text>
      <Button title='test'
        onPress={() =>
          navigation.navigate('PetHome')
        } />
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
