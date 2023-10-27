import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import perpusPicture from "/perpus.png";
import "./beranda.css";
import { Link } from "react-router-dom";

function Beranda() {
  return (
    <div id="beranda">
      <Navbar expand="lg" className="navbar bg-light shadow fixed-top">
        <Container>
          <Navbar.Brand href="#beranda" style={{ color: "blue" }}>
            <b>SIPERPUS</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#beranda">Beranda</Nav.Link>
              <Nav.Link href="#tentang">Tentang</Nav.Link>
              <Nav.Link href="#kontak">Kontak</Nav.Link>
              <Nav.Link href="#chat">
                <Link to="/openai" style={{ textDecoration: "none" }}>
                  Chat AI
                </Link>
              </Nav.Link>
              <Nav.Link href="#buku">
                <Link to="/buku" style={{ textDecoration: "none" }}>
                  Buku
                </Link>
              </Nav.Link>
              <NavDropdown title="Data Master" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/peminjaman" style={{ textDecoration: "none" }}>
                    Peminjaman
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/laporan" style={{ textDecoration: "none" }}>
                    Laporan
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="section">
        <div className="container">
          <div className="row text-center">
            <div className="row justify-content-center mb-3">
              <div className="col-md-8">
                <img src={perpusPicture} className="perpus" alt="perpustakaan" />
              </div>
              <div className="col-md-4">
                <h1 className="display-3">
                  <i>
                    <b>SIPERPUS</b>
                  </i>
                </h1>
                <p className="text-2">
                  <b>
                    <i>
                      "Meminjam Buku Lebih Baik <br /> daripada Meminjam Seratus"
                    </i>
                  </b>
                </p>
                <br />
                <p>Pencarian Buku yang Mudah, Pinjaman yang Cepat, dan Pembelajaran yang Tak Terbatas Hanya di SIPERPUS.</p>
                <a href="#tentang">
                  <button type="button" className="btn btn-light btn-lg">
                    Selengkapnya
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Beranda;
