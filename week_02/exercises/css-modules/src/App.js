import './App.css';
import TeamMember from './components/TeamMember';
import TeamCaptain from './components/TeamCaptain';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function App() {
  return (
    <div>
      <TeamMember img="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" firstName="first" lastName="last" jobRole="role" email="mail" phoneNumber="23356"/>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
      <TeamCaptain img="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" firstName="first" lastName="last" jobRole="role" email="mail" phoneNumber="23356"/>
      <Avatar  alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Hello world</Button>
 
    </div>
  );
}

export default App;