import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookPage from "./pages/BookPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BookPage />
    </div>
  );
}

export default App;
