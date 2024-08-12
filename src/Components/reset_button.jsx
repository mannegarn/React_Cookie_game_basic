export default function ResetButton({ onReset }) {
  const handleClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset and lose all your yummy cookies and upgrades?"
    );
    if (confirmed) {
      onReset();
    }
  };

  return (
    <button id="reset_button" onClick={handleClick}>
      Reset
    </button>
  );
}
