export interface InitialState {
  data: {
    avgTotalVolume: number | null;
    companyName: string;
    symbol: string;
    week52High: number | null;
    week52Low: number | null;
    change: number | null;
    close: number | null;
  };
  loading: boolean;
  error: string;
}
