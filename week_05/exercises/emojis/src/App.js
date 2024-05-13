import './App.css';
import EmojiList from './components/emojis/EmojiList';
import emojis from './data/emojis'

function App() {
  console.log(emojis);
  return (
    <div>
      <EmojiList data={emojis} />
    </div>
  );
}

export default App;