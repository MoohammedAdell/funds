import Ca from "./components/Ca";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <UserProvider value="mohamed">
      <Ca />
    </UserProvider>
  );
}

export default App;
