import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AssistantPage from './Assistant';
import PetPage from './Pet';
import TabBarIcon1 from './component/tab/TabBarIcon1';
import TabBarIcon2 from './component/tab/TabBarIcon2';
import TabBarIcon3 from './component/tab/TabBarIcon3';
import TabBarIcon4 from './component/tab/TabBarIcon4';
import TabBarIcon5 from './component/tab/TabBarIcon5';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 35,
          paddingHorizontal: 0,
          paddingTop: 35,
          backgroundColor: '#077AC2',
          // position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
        <Tab.Screen name="route" component={AssistantPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon1 focused={focused} />
          ),
        }} />
        <Tab.Screen name="timer" component={AssistantPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon2 focused={focused} />
          ),
        }} />
        <Tab.Screen name="home" component={AssistantPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon3 focused={focused} />
          ),
        }} />
        <Tab.Screen name="suitcase" component={AssistantPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon4 focused={focused} />
          ),
        }} />
        <Tab.Screen name="account" component={PetPage} options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon5 focused={focused} />
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
