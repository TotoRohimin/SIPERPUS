import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Beranda from "./component/Beranda/Beranda";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Beranda />
    </div>
  );
}

export default App;
