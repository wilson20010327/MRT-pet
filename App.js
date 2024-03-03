import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AssistantPage from './Assitant';
import PetPage from './Pet';
import TabBarIcon1 from './component/tab/TabBarIcon1';
import TabBarIcon2 from './component/tab/TabBarIcon2';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 0,
          paddingTop: 35,
          backgroundColor: '#000000',
          // position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
        <Tab.Screen name="Pet" component={PetPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon1 focused={focused} />
          ),
        }} />
        <Tab.Screen name="AI" component={AssistantPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon2 focused={focused} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
