import React from "react";
import {
  View,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";

const MoveableButton = ({ onChatToggle, position, setPosition }) => {
  const pan = React.useRef(new Animated.ValueXY(position)).current;

  const lastOffset = React.useRef(position);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newX = lastOffset.current.x + gestureState.dx;
      const newY = lastOffset.current.y + gestureState.dy;
      pan.x.setValue(newX);
      pan.y.setValue(newY);
    },
    onPanResponderRelease: () => {
      let newX = pan.x._value,
        newY = pan.y._value;

      if (newX <= -130) {
        newX = -150;
      } else if (newX >= 130) {
        newX = 150;
      }

      pan.x.setValue(newX);
      pan.y.setValue(newY);
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
          bottom: position.bottom,
          right: position.right,
        },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity onPress={onChatToggle}>
        <Image
          style={{
            width: 40,
            height: 40,
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
    borderRadius: 40,
    backgroundColor: "#077AC2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#DCDADA",
  },
});

export default MoveableButton;
