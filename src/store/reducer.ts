export const intitialState = {
  data: {
    avgTotalVolume: null,
    companyName: "",
    symbol: "",
    week52High: null,
    week52Low: null,
    change: null,
    close: null,
  },
  loading: false,
  error: "",
};

export const dataObjReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, data: payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
