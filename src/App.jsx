import { useState } from "react";
import { list } from "./data";
import { Carousel } from "./assets/Carousel/Carousel";

const App = () => {
  const [people, setPeople] = useState(list);
  return (
    <main>
      <Carousel list={people} setList={setPeople} />
    </main>
  );
};
export default App;
