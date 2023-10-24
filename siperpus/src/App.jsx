import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookPage from "./pages/BookPage";
import ChatAIPage from "./pages/ChatAIPage";
import BorrowingPage from "./pages/BorrowingPage";
import ReportPage from "./pages/ReportPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buku" element={<BookPage />} />
        <Route path="/openai" element={<ChatAIPage />} />
        <Route path="/peminjaman" element={<BorrowingPage />} />
        <Route path="/laporan" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
