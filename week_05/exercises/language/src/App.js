import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageArea } from './context/LanguageContext';

function App() {
  return (
    <LanguageArea>
      <LanguageSwitcher/>
    </LanguageArea>
  );
}

export default App;
