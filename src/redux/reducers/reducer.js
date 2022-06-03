const INITIAL_STATES = {
  token: null,
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case 'SAVE_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
      };
    case 'LOADER_START':
      return {
        ...state,
        loader: true,
      };
    case 'LOADER_STOP':
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
}
