import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./component/Header-self";
import MoveableButton from "./component/button/MovableButton";
import { AppStateContext } from "./AppStateContext";
export default function AssistantPage() {
  const [isChatVisible, setIsChatVisible] = React.useState(false);
  const { position, setPosition } = useContext(AppStateContext);

  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <View style={styles.container}>
      <Header />
      <MoveableButton
        onChatToggle={handleChatToggle}
        position={position}
        setPosition={setPosition}
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
});
