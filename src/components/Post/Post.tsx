import React from "react";

const intitialState = {
  dataName: "",
  loading: false,
  error: "",
};

const dataObjReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { dataName: payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export const Post = () => {
  const [data, dispatch] = React.useReducer(dataObjReducer, intitialState);

  const url =
    "https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_6bdef7854f494c9cbeb36fb557cd0338";

  const handleFetch = () => {
    dispatch({ type: "FETCH_START", loading: true });

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.companyName,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.toString() });
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {data.loading ? "Wait..." : "Fetch the data"}
      </button>
      {data.dataName && !data.error ? (
        <p>{JSON.stringify(data.dataName)}</p>
      ) : (
        <p>{data.error && data.error}</p>
      )}
    </div>
  );
};
