import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../component/Header-self";
import MoveableButton from "../component/button/MovableButton";
import ChatRoom from "../component/ChatRoom";
import { AppStateContext } from "../AppStateContext";
import RedirectPage from "../component/RedirectPage";
export default function HomeScreen() {
  const [isChatVisible, setIsChatVisible] = React.useState(false);
  const [isRedirectVisible, setIsRedirectVisible] = React.useState(false);
  const { position, setPosition } = useContext(AppStateContext);

  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleRedirectToggle = () => {
    setIsChatVisible(false);
    setIsRedirectVisible(!isRedirectVisible);
  };

  return (
    <View style={styles.container}>
      {isRedirectVisible ? (
        <RedirectPage
          isVisible={isRedirectVisible}
          onClose={handleRedirectToggle}
        />
      ) : (
        <>
          <Header />
          <View style={{ zIndex: 1 }}>
            <MoveableButton
              onChatToggle={handleChatToggle}
              position={position}
              setPosition={setPosition}
            />
          </View>
          <View style={{ zIndex: 2 }}>
            <ChatRoom
              isVisible={isChatVisible}
              onClose={handleChatToggle}
              onRedirectToggle={handleRedirectToggle}
            />
          </View>
          <Image
            style={styles.backgroundImage}
            resizeMode="contain"
            source={require("../assets/home.png")}
          />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 60,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, 
  },
});
