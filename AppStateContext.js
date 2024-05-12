import { createContext, useState } from "react";
import { Text, StyleSheet } from "react-native";
export const AppStateContext = createContext();

export const AppStateProvider = (props) => {
  const [position, setPosition] = useState({ x: -180, y: 170 });
  const [messages, setMessages] = useState([
    {
      isMyMessage: false,
      text: (
        <Text style={[styles.otherMessageBubble, styles.messageText]}>
          您好，今天有什麼需要為您提供的服務嗎?
        </Text>
      ),
    },
  ]);

  return (
    <AppStateContext.Provider
      value={{
        position,
        setPosition,
        messages,
        setMessages,
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};

const styles = StyleSheet.create({
  otherMessageBubble: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "80%",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#009A96",
  },
  messageText: {
    color: "white",
    fontSize: 16,
    overflow: "hidden",
  },
});
