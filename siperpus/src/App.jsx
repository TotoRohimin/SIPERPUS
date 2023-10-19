import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Beranda from "./component/Beranda/Beranda";
import Kontak from "./component/Kontak/Kontak.1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Beranda />
      <Kontak />
    </div>
  );
}

export default App;
