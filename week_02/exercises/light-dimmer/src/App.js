import './App.css';
import LightDimmer from './components/LightDimmer';
import React from "react";
import { Avatar } from "flowbite-react";

function App() {
  return (
    <div className="App">
      <LightDimmer />
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Avatar img="https://pbs.twimg.com/profile_images/827161829843542017/4aDnLZeU_400x400.jpg" alt="avatar of Jese" />
    </div>
  );
}

export default App;