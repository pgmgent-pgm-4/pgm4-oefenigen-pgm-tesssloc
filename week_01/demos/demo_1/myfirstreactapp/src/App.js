import './App.css';
import TeamCard from './components/TeamCard';


function App() {
  return (
    <div className="App">
      <TeamCard jobFunction="CEO" firstName="Tess" lastName="Slock"/>
      <TeamCard jobFunction="Assistent" firstName="Warre" lastName="Slock"/>
    </div>
  );
}

export default App;