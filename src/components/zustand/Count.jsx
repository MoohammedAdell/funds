import { useCount } from "./StoreCounter";

function Count() {
  const { count, increasePopulation, removeAllCount } = useCount();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increasePopulation}>increase</button>
      <button onClick={removeAllCount}>removeAllCount</button>
      {/* <button onClick={updateCount({ count: 4 })}>updateCount</button> */}
    </div>
  );
}

export default Count;
