import { useToggle } from "./StoreToggle";

function Toggle() {
  const { toggle, isOn } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Change Toggle</button>
      <h4>{isOn ? "On" : "Off"}</h4>
    </div>
  );
}

export default Toggle;
