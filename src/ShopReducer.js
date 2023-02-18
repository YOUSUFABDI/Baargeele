export const initialState = {
  products: [],
  total: 0,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_TRANS":
      return {
        ...state,
        products: payload.products,
      };

    default:
      throw new Error("wax ba qaldan");
  }
};

export default shopReducer;
