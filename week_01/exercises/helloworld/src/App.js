import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  const name = "Tess";
  return (
    <div>
      <HelloWorld name={name}/>
    </div>
  );
}

export default App;