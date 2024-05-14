export const dressSaveAction = (monser, item) => {
  return {
    type: "DRESSSAVE",
    payload: { monser, item },
  };
};

export const setAssistantPostion = (x, y) => {
  return {
    type: "SET_ASSISTANT_POSITION",
    payload: { x, y },
  };
};

export const setAssistantMessages = (messages) => {
  return {
    type: "SET_ASSISTANT_MESSAGES",
    payload: { messages },
  };
};
