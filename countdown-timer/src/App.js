import "./App.css";
import NewYearCountdown from "./NewYearCountdown";

function App() {
  return (
    <div className="countdown-container">
      <h3 className="countdown-title">-- countdown to --</h3>
      <h1 className="countdown-header">New Year</h1>
      <NewYearCountdown />
    </div>
  );
}

export default App;
