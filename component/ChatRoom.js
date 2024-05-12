import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Keyboard,
} from "react-native";
import MessageBubble from "./MessageBubble";

const ChatRoom = ({ isVisible, onClose, onRedirectToggle, messages, setMessages }) => {
  if (!isVisible) {
    return null;
  }

  const hintMessages = [
    "距離____捷運站最近的YouBike站?",
    "____捷運站有置物櫃可以放行李箱嗎?",
    "距離____捷運站最近的YouBike站?",
    "提供___捷運站的免費接駁車資訊",
    "我想查看我有什麼優惠卷",
    "查看最新列車動態",
    "還有多少空的置物櫃?",
  ];

  const [isHintVisible, setIsHintVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const flatListRef = useRef();

  const handleHintToggle = () => {
    setIsHintVisible(!isHintVisible);
  };

  const handleTextChange = (text) => {
    setTextInputValue(text);
  };

  const handleHintPress = (hint) => {
    setTextInputValue(hint);
    handleHintToggle();
  };

  useEffect(() => {
    if (messages && flatListRef.current) {
      setTimeout(() => {
        flatListRef.current.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleButtonPress = () => {
    if (textInputValue == "") return;
    let newMessages = [...messages];
    let newAiMessages = getResponseMessage(textInputValue);
    let newMyMessages = { isMyMessage: true, text: textInputValue };
    newMessages.push(newMyMessages);
    newMessages.push(newAiMessages);
    setMessages(newMessages);
    setTextInputValue("");
    Keyboard.dismiss();
  };

  const getResponseMessage = (message) => {
    let response = { isMyMessage: false, text: <></> };

    if (message.includes("捷運站最近的YouBike站")) {
      response.text = (
        <View style={styles.otherMessageBubble}>
          <Text style={styles.messageText}>
            捷運站最近的YouBike站是 ____ 站
          </Text>
        </View>
      );
    } else if (message.includes("捷運站有置物櫃可以放行李箱")) {
      response.text = (
        <View style={styles.otherMessageBubble}>
          <Text style={styles.messageText}>
            有喔!
            ____捷運站的置物櫃有分小與大兩種尺寸，計費方式分別為10元/時與20元/時。
          </Text>
        </View>
      );
    } else if (message.includes("還有多少空的置物櫃")) {
      response.text = (
        <View style={styles.otherMessageBubble}>
          <Text style={styles.messageText}>
            很抱歉，台北捷運GO沒有提供此方面服務。但您可以參考台北捷運官網置物櫃的即時資訊，連接如下:
          </Text>
        </View>
      );
    } else if (message.includes("提供___捷運站的免費接駁車資訊")) {
      response.text = (
        <View style={styles.otherMessageBubble}>
          <Text style={styles.messageText}>
            ___捷運站的免費接駁車資訊在 ___
          </Text>
        </View>
      );
    } else if (message.includes("優惠卷")) {
      response.text = (
        <View style={styles.otherMessageBubble}>
          <Text style={styles.messageText}>沒問題，可以到以下連結查看</Text>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={onRedirectToggle}
          >
            <Text style={styles.toggleButtonText}>前往</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      response.text = (
        <View style={styles.otherMessageBubble}>
          <Text style={styles.messageText}>對不起，我不懂您的問題</Text>
        </View>
      );
    }

    return response;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={[
          styles.baseContainer,
          isHintVisible ? styles.hintContainer : styles.chatContainer,
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleHintToggle}>
            <Image
              style={{
                marginRight: 5,
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
              source={
                isHintVisible
                  ? require("../assets/back.png")
                  : require("../assets/help.png")
              }
            />
            <Text style={styles.buttonText}>
              {isHintVisible ? "隱藏提示" : "問題提示"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: 5 }}>
          {!isHintVisible ? (
            <View style={{ flex: 1 }}>
              <FlatList
                ref={flatListRef}
                style={{ flex: 1, marginBottom: 5 }}
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <MessageBubble
                    key={index.toString()}
                    message={item}
                    isMyMessage={item.isMyMessage}
                  />
                )}
                extraData={messages}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleTextChange}
                  value={textInputValue}
                  multiline
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={handleButtonPress}
                >
                  <Image
                    source={require("../assets/message_send.png")}
                    style={styles.sendButtonText}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <FlatList
                data={hintMessages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={index.toString()}
                    style={styles.hintButton}
                    onPress={() => handleHintPress(item)}
                  >
                    <Text style={styles.buttonHintText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={{
                  marginTop: "5%",
                  marginLeft: "45%",
                  marginRight: "45%",
                }}
              >
                <Image
                  source={require("../assets/vector.png")}
                  style={styles.sendButtonText}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    top: 5,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 150,
  },
  chatContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  hintContainer: {
    backgroundColor: "rgb(0, 0, 0)",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeText: {
    color: "white",
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  hintButton: {
    margin: 8,
    padding: 8,
    backgroundColor: "#3F3F3F",
    borderRadius: 15,
    borderColor: "#007AB0",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  hintRefreshButton: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  buttonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonHintText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  chatContent: {
    flex: 1,
    marginTop: 10,
    marginRight: 20,
  },
  chatContentContainer: {
    paddingVertical: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 340,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 16,
    color: "white",
  },
  sendButton: {
    backgroundColor: "#007AB0",
    borderRadius: 8,
    width: 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
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
  toggleButton: {
    margin: 5,
    backgroundColor: "#007AB0",
    borderRadius: 8,
    width: 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleButtonText: {
    color: "white",
  },
});

export default ChatRoom;
