import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Container, Form, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./chat.css";

function ChatAI() {
  const configuration = new Configuration({
    apiKey: "",
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setsetResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setsetResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div id="beranda">
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
              <Form.Control type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Apa yang ingin anda tanyakan..." className="textarea" />
            </Form.Group>

            <div className="button-container">
              <Button onClick={handleClick} disabled={loading || prompt.length === 0} variant="primary">
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
