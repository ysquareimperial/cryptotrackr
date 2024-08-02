import React, { useState } from "react";
import AllCoins from "./components/AllCoins";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <AllCoins />
    </div>
  );
};

export default App;
