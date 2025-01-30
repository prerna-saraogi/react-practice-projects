import "./App.css";
import NewYearCountdown from "./NewYearCountdown";

function App() {
  let year = new Date().getFullYear() + 1;
  return (
    <div className="countdown-container">
      <h3 className="countdown-title">-- countdown to --</h3>
      <h1 className="countdown-header">✨ New Year {year} ✨</h1>
      <NewYearCountdown />
    </div>
  );
}

export default App;
