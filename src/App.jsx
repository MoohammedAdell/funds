import Count from "./components/zustand/stores/count/Count";
import Toggle from "./components/zustand/stores/toggle/Toggle";
import Mood from "./components/zustand/stores/Mood/Mood";
import Cart from "./components/zustand/stores/cart/Cart";

function App() {
  return (
    <>
      <Count />
      <Toggle />
      <Mood />
      <Cart/>
    </>
  );
}

export default App;
