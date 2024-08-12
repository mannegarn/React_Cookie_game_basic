export default function MultiplierUpgrade({ multiplier, onPurchase }) {
  const cost = 10;
  return (
    <div className="upgrade">
      <p>Multiplier: {multiplier}</p>
      <button
        className="upgrade-button"
        onClick={() => onPurchase("multiplier", cost)}
      >
        Buy Multiplier (Cost: {cost})
      </button>
    </div>
  );
}
