import React from "react";
import { intitialState, dataObjReducer } from "../../store/reducer";
import { Card } from "../Card/Card";

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
          payload: {
            avgTotalVolume: data.avgTotalVolume,
            companyName: data.companyName,
            symbol: data.symbol,
            week52High: data.week52High,
            week52Low: data.week52Low,
            change: data.change,
            close: data.close,
          },
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
      {JSON.stringify(data) !== JSON.stringify(intitialState) &&
      !data.loading &&
      !data.error ? (
        <Card data={data} />
      ) : (
        <p>{data.error && data.error}</p>
      )}
    </div>
  );
};
