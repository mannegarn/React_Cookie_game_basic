export default function BakersUpgrade({ cookiesPerSecond, onPurchase }) {
  const cost = 5;
  return (
    <div className="upgrade">
      <p>Bakers: {cookiesPerSecond}</p>
      <button
        className="upgrade-button"
        onClick={() => onPurchase("bakers", cost)}
      >
        Buy Bakers (Cost: {cost})
      </button>
    </div>
  );
}
