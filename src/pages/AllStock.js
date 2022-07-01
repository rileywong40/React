import StockInfoItem from "../component/StockInfoItem";

var datasets = [
  {
    stockCode: "VOO",
    price: "$346.88",
    rate: "down 0.79%",
    time: "Jun 30, 8:04:00 PM UTC-4",
  },
  {
    stockCode: "AAPL",
  },
];

function AllStock() {
  return (
    <div>
      <h1>AllStock</h1>
      {datasets.map((e) => {
        return <StockInfoItem data={e} />;
      })}
    </div>
  );
}

export default AllStock;
