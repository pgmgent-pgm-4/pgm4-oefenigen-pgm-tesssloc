import './App.css';
import LightDimmer from './components/LightDimmer';
import React from "react";
import { Avatar } from "flowbite-react";
import { Button } from "flowbite-react";

function App() {
  return (
    <div className="App">
      <LightDimmer />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Avatar img="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" alt="avatar of Jese" />
      <Button color="blue">Blue</Button>
      <Button>Default</Button>
    </div>
  );
}

export default App;