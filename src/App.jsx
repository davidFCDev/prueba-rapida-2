import React, { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";

function App() {
  const [fact, setFact] = useState();

  const handleClick = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
