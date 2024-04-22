import './App.css';

function App() {
  const age = 550;
  return (
    <>
      {age < 18
        ? "<span>Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te bekijken.</span>"
        : "<span>Je bent oud genoeg om de inhoud van deze website te bekijken.</span>"}
    </>
  );
}

export default App;
