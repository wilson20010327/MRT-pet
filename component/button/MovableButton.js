import React from "react";
import {
  View,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const BUTTON_SIZE = 40;

const MoveableButton = ({ onChatToggle, position, setPosition }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const maxX = screenWidth / 2 - 70;
  const maxY = screenHeight - 300;
  const minX = -(screenWidth / 2);

  const pan = React.useRef(new Animated.ValueXY(position)).current;
  const lastOffset = React.useRef(position);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newX = lastOffset.current.x + gestureState.dx;
      const newY = lastOffset.current.y + gestureState.dy;

      pan.setValue({ x: newX, y: newY });
    },
    onPanResponderRelease: () => {
      const currentX = pan.x._value;
      const currentY = pan.y._value;

      const distanceToMinX = Math.abs(currentX - minX);
      const distanceToMaxX = Math.abs(currentX - maxX);
      const newX = distanceToMinX > distanceToMaxX ? maxX : minX;
      const newY = Math.min(Math.max(currentY, 0), maxY);

      pan.setValue({ x: newX, y: newY });

      lastOffset.current.x = newX;
      lastOffset.current.y = newY;

      setPosition({ x: newX, y: newY });
    },
    onMoveShouldSetPanResponder: (evt, { dx, dy }) => {
      return dx > 0 || dy > 0;
    },
  });

  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        {
          transform: pan.getTranslateTransform(),
        },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity onPress={onChatToggle}>
        <Image
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            resizeMode: "contain",
          }}
          source={require("../../assets/aiIcon-click.png")}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#077AC2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#DCDADA",
  },
});

export default MoveableButton;
