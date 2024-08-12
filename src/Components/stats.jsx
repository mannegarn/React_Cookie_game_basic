export default function Stats({ cookieCount, cookiesPerSecond }) {
  return (
    <div id="stats">
      <p id="cookie-count">Cookie count: {cookieCount}</p>
      <p id="cookies-per-second">Cookies per second: {cookiesPerSecond}</p>
    </div>
  );
}
