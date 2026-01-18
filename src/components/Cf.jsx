import { UserConsumer } from "./userContext";

function Cf() {
  return (
    <UserConsumer>
      {(name) => {
        return <h1> Hello {name}</h1>;
      }}
    </UserConsumer>
  );
}

export default Cf;
