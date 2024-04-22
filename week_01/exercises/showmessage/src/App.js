import './App.css';

function App() {
  const showMessage = false;
  return (
    <div className="App">
      {showMessage && <p>Dit is een optioneel bericht dat alleen wordt weergegeven als showMessage true is.</p>}
    </div>
  );
}

export default App;
