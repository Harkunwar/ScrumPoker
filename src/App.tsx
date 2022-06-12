import type { Component } from "solid-js";
import Home from "./pages/Home";

const App: Component = () => {
  return (
    <div class="bg-gray-900 w-screen h-screen text-gray-100">
      <Home />
    </div>
  );
};

export default App;
