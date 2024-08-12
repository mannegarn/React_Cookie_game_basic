import ResetButton from "./reset_button";

export default function Title({ onReset }) {
  return (
    <div>
      <h1>
        <ResetButton onReset={onReset} />
        Cookie Clicker
      </h1>
    </div>
  );
}
