import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const RedirectPage = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.BackIconContainer}>
        <Image
          style={styles.BackIcon}
          source={require("../assets/back-2.png")}
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/coupon.jpg")}
        style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backgroundImage: {
    position: "absolute",
    top: 60,
    left: -187,
    width: "100%",
    height: "100%",
    zIndex: -1, 
  },
  BackIconContainer: {
    position: "absolute",
    top: 77,
    left: -158,
    zIndex: 150,
  },
  BackIcon: {
    width: 25,
    height: 32,
  },
  couponImage: {
    position: "absolute",
    top: 0,
    left: -220,
    width: 440,
    height: 1000,
  },
});

export default RedirectPage;
