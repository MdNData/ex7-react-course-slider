import { useState } from "react";
import { list } from "./data";
import { Carousel } from "./assets/Carousel/Carousel";
import SlickCarousel from "./assets/SlickCarousel/SlickCarousel";

const App = () => {
  const [people, setPeople] = useState(list);
  return (
    <main>
      <SlickCarousel />
      <Carousel list={people} setList={setPeople} />
    </main>
  );
};
export default App;
