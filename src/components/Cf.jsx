import { useContext } from "react";
import { UserContext } from "../App";

function Cf() {
  const pasta = useContext(UserContext);
  return (
    <>
      <div>{pasta}</div>
    </>
  );
}

export default Cf;
