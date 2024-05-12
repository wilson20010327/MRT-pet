import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../component/Header-self";
import MoveableButton from "../component/button/MovableButton";
import ChatRoom from "../component/ChatRoom";
import { AppStateContext } from "../AppStateContext";
export default function TimePage() {
  const [isChatVisible, setIsChatVisible] = React.useState(false);
  const [isRedirectVisible, setIsRedirectVisible] = React.useState(false);
  const [redirectPage, setRedirectPage] = React.useState(
    require("../assets/time.png")
  );
  const { position, setPosition, messages, setMessages } =
    useContext(AppStateContext);

  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleRedirectToggle = (visiable, page) => {
    setIsChatVisible(false);
    setIsRedirectVisible(visiable);

    switch (page) {
      case "coupon":
        setRedirectPage(require("../assets/coupon.jpg"));
        break;
      case "line-info":
        setRedirectPage(require("../assets/line-info.jpg"));
        break;
      default:
        setRedirectPage(require("../assets/time.png"));
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ zIndex: 2 }}>
        <MoveableButton
          onChatToggle={handleChatToggle}
          position={position}
          setPosition={setPosition}
        />
      </View>
      <View style={{ zIndex: 3 }}>
        <ChatRoom
          isVisible={isChatVisible}
          onClose={handleChatToggle}
          messages={messages}
          setMessages={setMessages}
          onRedirectToggle={handleRedirectToggle}
        />
      </View>
      {isRedirectVisible && (
        <View style={{ zIndex: 3 }}>
          <TouchableOpacity
            onPress={() => handleRedirectToggle(false, "time")}
            style={styles.BackIconContainer}
          >
            <Image
              style={styles.BackIcon}
              source={require("../assets/back-2.png")}
            />
          </TouchableOpacity>
        </View>
      )}
      <Image
        style={styles.backgroundImage}
        resizeMode="contain"
        source={redirectPage}
      />

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
  BackIconContainer: {
    position: "absolute",
    top: -40,
    left: -158,
    zIndex: 3,
  },
  BackIcon: {
    width: 25,
    height: 32,
  },
});
