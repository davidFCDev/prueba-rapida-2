import React from "react";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="imagen random de api de gatos" />}
    </div>
  );
}

export default App;
