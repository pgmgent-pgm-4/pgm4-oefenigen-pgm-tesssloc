import './App.css';
import TeamMember from './components/TeamMember';
import TeamCaptain from './components/TeamCaptain';

function App() {
  return (
    <div>
      <TeamMember img="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" firstName="first" lastName="last" jobRole="role" email="mail" phoneNumber="23356"/>
      <TeamCaptain img="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" firstName="first" lastName="last" jobRole="role" email="mail" phoneNumber="23356"/>
    </div>
  );
}

export default App;