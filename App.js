import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { createNavigationContainerRef } from "@react-navigation/native";
import PersonalPage from "./screen/Personal";
import HomeScreen from "./screen/HomeScreen";
import TimePage from "./screen/Timer";
import TripPage from "./screen/Trip";
import RoutePage from "./screen/Route";
import { store } from "./store/store";
import { Provider } from "react-redux";
import TabBarIcon1 from "./component/tab/TabBarIcon1";
import TabBarIcon2 from "./component/tab/TabBarIcon2";
import TabBarIcon3 from "./component/tab/TabBarIcon3";
import TabBarIcon4 from "./component/tab/TabBarIcon4";
import TabBarIcon5 from "./component/tab/TabBarIcon5";
import { AppStateProvider } from "./AppStateContext";
const Tab = createBottomTabNavigator();
const ref = createNavigationContainerRef();
export default function App() {
  const [routeName, setRouteName] = useState();
  return (
    <Provider store={store}>
      <AppStateProvider>
        <NavigationContainer
          ref={ref}
          onReady={() => {
            setRouteName(ref.getCurrentRoute().name);
          }}
          onStateChange={async () => {
            const previousRouteName = routeName;
            const currentRouteName = ref.getCurrentRoute().name;
            setRouteName(currentRouteName);
          }}
        >
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: styles.tabstyle,
            })}
          >
            <Tab.Screen
              name="route"
              component={RoutePage}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color, size }) => (
                  <TabBarIcon1 focused={focused} />
                ),
              }}
            />
            <Tab.Screen
              name="timer"
              component={TimePage}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color, size }) => (
                  <TabBarIcon2 focused={focused} />
                ),
              }}
            />
            <Tab.Screen
              name="home"
              component={HomeScreen}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color, size }) => (
                  <TabBarIcon3 focused={focused} />
                ),
              }}
            />
            <Tab.Screen
              name="suitcase"
              component={TripPage}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color, size }) => (
                  <TabBarIcon4 focused={focused} />
                ),
              }}
            />
            <Tab.Screen
              name="account"
              component={PersonalPage}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color, size }) => (
                  <TabBarIcon5 focused={focused} />
                ),
                tabBarStyle:
                  routeName == "PetHome"
                    ? styles.tabstyle_hidden
                    : styles.tabstyle,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </AppStateProvider>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  tabstyle: {
    height: 35,
    paddingHorizontal: 0,
    paddingTop: 35,
    backgroundColor: "#077AC2",
    borderTopWidth: 0,
  },
  tabstyle_hidden: {
    display: "none",
  },
});
