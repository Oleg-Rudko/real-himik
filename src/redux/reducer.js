import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      return {
        ...state,
        language: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
