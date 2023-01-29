import React from "react";

interface DataObj {
  avgTotalVolume: number | undefined;
  companyName: string | undefined;
  symbol: string | undefined;
  week52High: number | undefined;
  week52Low: number | undefined;
}

export const Post = () => {
  const [loading, setLoading] = React.useState(false);
  const [dataObj, setDataObj] = React.useState<DataObj>({
    avgTotalVolume: undefined,
    companyName: undefined,
    symbol: undefined,
    week52High: undefined,
    week52Low: undefined,
  });
  const [error, setError] = React.useState("");

  const url =
    "https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_6bdef7854f494c9cbeb36fb557cd0338";

  const handleFetch = () => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setDataObj({
          avgTotalVolume: data.avgTotalVolume,
          companyName: data.companyName,
          symbol: data.symbol,
          week52High: data.week52High,
          week52Low: data.week52Low,
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {loading ? "Wait..." : "Fetch the data"}
      </button>
      {dataObj && !error ? (
        <p>{JSON.stringify(dataObj)}</p>
      ) : (
        <p>{error && "Something went wrong!"}</p>
      )}
    </div>
  );
};
