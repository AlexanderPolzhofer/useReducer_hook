import React from "react";
import { InitialState } from "../../constants/types";
import "./Card.scss";

interface CardProps {
  data: InitialState;
}

export const Card: React.FC<CardProps> = ({ data }) => (
  <div className="card">
    <div>
      <p className="heading">
        {data.data.companyName}/ {data.data.symbol}
      </p>
    </div>
    <p>volume: {data.data.avgTotalVolume}</p>
    <p>change: {data.data.change} $</p>
    <p>52 week high: {data.data.week52High}</p>
    <p>52 week low: {data.data.week52Low}</p>
  </div>
);
