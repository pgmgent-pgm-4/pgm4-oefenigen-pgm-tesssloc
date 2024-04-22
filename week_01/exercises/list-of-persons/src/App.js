import './App.css';

function App() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
  return (
    <div>
      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
