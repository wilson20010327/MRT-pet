import React from "react";
import Pet from "./pet/Pet";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
const MessageBubble = ({ message, isMyMessage }) => {
  const user_monster = useSelector(
    (state) => state.userData.user_monster,
    shallowEqual
  );
  const user_item = useSelector(
    (state) => state.userData.user_item,
    shallowEqual
  );
  return (
    <View style>
      {!isMyMessage ? (
        <View style={styles.otherMessageContent}>
          <View style={styles.avatarContainer}>
            <Pet monster={user_monster} item={user_item} />
          </View>
          {message.text && (
            <Text style={[styles.otherMessageBubble, styles.messageText]}>
              {message.text}
            </Text>
          )}
          {message.html}
        </View>
      ) : (
        <View style={styles.myMessageBubble}>
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  otherMessageContent: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  myMessageBubble: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#007AB0",
  },
  otherMessageBubble: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#009A96",
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "#018C88",
    borderColor: "#018C88",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  messageText: {
    color: "white",
    fontSize: 16,
    maxWidth: "80%",
    overflow: "hidden",
  },
});

export default MessageBubble;
