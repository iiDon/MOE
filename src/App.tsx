import Enviroments from "./components/Enviroments/Enviroments";
import About from "./components/Home/About";
import Goals from "./components/Home/Goals";
import Slider from "./components/Home/Slider";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <>
      <Slider />
      <About />
      <Goals />
      <Separator className=" rounded-full bg-primary" />

      <Enviroments />
    </>
  );
}

export default App;
