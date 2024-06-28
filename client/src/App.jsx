import { useState } from "react";
import { Auth } from "./components/Auth";
import { Home } from "./Home";

function App() {
  const [username, setUsername] = useState("");

  return username ? (
    <Home username={username} />
  ) : (
    <Auth onSubmit={setUsername} />
  );
}

export default App;
