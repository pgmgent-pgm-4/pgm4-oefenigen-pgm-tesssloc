import './App.css';
import QuoteList from './components/QuoteList';

function App() {
  /*const quotes = [
    "I'm not a great programmer; I'm just a good programmer with great habits.",
    "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    "Truth can only be found in one place: the code.",
    "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  ];*/
  const quotes = [
    {
      content:
        "I'm not a great programmer; I'm just a good programmer with great habits.",
      cite: "Kent Beck",
    },
    {
      content:
        "I'm not a great programmer; I'm just a good programmer with great habits.",
      cite: "Kent Beck",
    }
  ];
  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;