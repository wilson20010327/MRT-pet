import { Text } from "react-native";

const initState = {
  user_monster: 1,
  user_item: 5,
  assistant_pos_x: -180,
  assistant_pos_y: 170,
  assistant_messages: [
    {
      isMyMessage: false,
      text: <Text>您好，今天有什麼需要為您提供的服務嗎?</Text>,
    },
  ],
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "DRESSSAVE":
      return {
        ...state,
        user_monster: payload.monster,
        user_item: payload.item,
      };
    case "SET_ASSISTANT_POSITION":
      return {
        ...state,
        assistant_pos_x: payload.x,
        assistant_pos_y: payload.y,
      };
    case "SET_ASSISTANT_MESSAGES":
      return {
        ...state,
        assistant_messages: payload.messages,
      };
    default:
      return state;
  }
};
