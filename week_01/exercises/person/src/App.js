import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person firstName="Charly" lastName="Peeters" pictureUrl="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" age="24" length="1.99" weight="55" />
      <Person firstName="Jan" lastName="Jansen" pictureUrl="https://pbs.twimg.com/profile_images/588761004135186432/FTR0aJ12_400x400.jpg" age="54" length="1.69" weight="85" />
      <Person firstName="Bob" lastName="VanGent" pictureUrl="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/2c/2e/77/2c2e7707-1585-be11-3f93-23c1a7d14258/source/256x256bb.jpg" age="35" length="1.82" weight="78" />
    </div>
  );
}

export default App;