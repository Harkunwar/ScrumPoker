import type { Component } from "solid-js";
import Poker from "./components/Poker";

const App: Component = () => {
  return (
    <div class="bg-gray-900 w-screen h-screen text-gray-100">
      <Poker />
    </div>
  );
};

export default App;
