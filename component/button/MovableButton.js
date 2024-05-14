import React from "react";
import {
  View,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Pet from "../pet/Pet";
import { setAssistantPostion } from "../../store/userAction";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
const BUTTON_SIZE = 40;

const MoveableButton = ({ onChatToggle }) => {
  const dispatch = useDispatch();
  const assistant_pos_x = useSelector(
    (state) => state.userData.assistant_pos_x,
    (prev, next) => prev === next
  );
  const assistant_pos_y = useSelector(
    (state) => state.userData.assistant_pos_y,
    (prev, next) => prev === next
  );

  const user_monster = useSelector(
    (state) => state.userData.user_monster,
    shallowEqual
  );
  const user_item = useSelector(
    (state) => state.userData.user_item,
    shallowEqual
  );

  React.useEffect(() => {
    Animated.timing(pan, {
      toValue: { x: assistant_pos_x, y: assistant_pos_y },
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    lastOffset.current.x = assistant_pos_x;
    lastOffset.current.y = assistant_pos_y;

  }, [assistant_pos_x, assistant_pos_y]);

  const pan = React.useRef(
    new Animated.ValueXY({ x: assistant_pos_x, y: assistant_pos_y })
  ).current;
  const lastOffset = React.useRef({ x: assistant_pos_x, y: assistant_pos_y });

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const maxX = screenWidth / 2 - 70;
  const maxY = screenHeight - 300;
  const minX = -(screenWidth / 2);

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

      dispatch(setAssistantPostion(newX, newY));

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
        <View
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
          }}
        >
          <Pet monster={user_monster} item={user_item} />
        </View>
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
    backgroundColor: "rgb(56, 176, 53)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#DCDADA",
  },
});

export default MoveableButton;
