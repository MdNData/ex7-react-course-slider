import { useState } from "react";
import { shortList } from "./data";
import { Carousel } from "./assets/Carousel/Carousel";

const App = () => {
  const [people, setPeople] = useState(shortList);
  return (
    <main>
      <Carousel list={people} setList={setPeople} />
    </main>
  );
};
export default App;
