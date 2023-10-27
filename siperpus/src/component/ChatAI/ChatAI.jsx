import React, { useState } from "react";
import OpenAIApi, { OpenAI } from "openai";
import { Container, Form, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./chat.css";

function ChatAI() {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_APIKEY_OPENAI,
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("Bagaimana saya bisa meminjam buku di SIPERPUS?");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 100,
      });
      setResult(response.choices[0].text);

      if (prompt.includes("")) {
        const customResponse = (
          <div>
            Anda dapat meminjam buku di SIPERPUS dengan mengikuti langkah-langkah berikut:
            <br />
            1. Kunjungi terlebih dahulu website SIPERPUS
            <br />
            2. Kemudian, anda akan langsung masuk ke halaman utama
            <br />
            3. Kemudian, lihat dibagian navbar ada menu Buku
            <br />
            4. Pilih menu buku
            <br />
            5. Lalu, anda masuk ke halaman Buku
            <br />
            6. Selamat, anda sudah bisa meminjam Buku di SIPERPUS.
          </div>
        );
        setResult(customResponse);
      }
      setData("");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div id="navbar">
      <Navbar expand="lg" className="navbar bg-light shadow fixed-top">
        <Container>
          <Navbar.Brand href="#beranda">
            <b>SIPERPUS</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#beranda">Beranda</Nav.Link>
              <Nav.Link href="#tentang">Tentang</Nav.Link>
              <Nav.Link href="#kontak">Kontak</Nav.Link>
              <Nav.Link href="#chat">Chat AI</Nav.Link>
              <Nav.Link href="#buku">Buku</Nav.Link>
              <NavDropdown title="Data Master" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Peminjaman</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laporan</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h1 className="display-6">Chat AI SIPERPUS</h1>
        <div className="mx-auto">
          <Form>
            <Form.Group controlId="prompt">
              <Form.Control type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} className="textarea" />
            </Form.Group>

            <div className="button-container">
              <Button onClick={handleSubmit} disabled={loading || prompt.length === 0} variant="primary">
                {loading ? "Generating..." : "Generate"}
              </Button>
            </div>
          </Form>
          <div className="response">
            <p>{result}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ChatAI;
