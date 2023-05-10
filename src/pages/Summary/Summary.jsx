const summaryTotalsLabels = [
  { id: "sub", label: "Subtotal: " },
  { id: "ship", label: "Shipping: " },
  { id: "total", label: "Total: " },
];

const Summary = (props) => {
  const { cartQty, page, totals } = props;

  return (
    <div id="Summary">
      <h2 className="summary-title">Summary</h2>
      {page === "cart" && (
        <p className="summary-qty">{cartQty} items in cart</p>
      )}
      <div className="summary-totals">
        {summaryTotalsLabels.map((item) => (
          <p key={item.id} className={`total-text ${item.id}`}>
            <span className="total-label">{item.label}</span>${" "}
            {totals[item.id] === 0 ? "-" : totals[item.id]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Summary;
