import React, { useState } from "react";
import { Container, Form, Button, Table, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./laporan.css";

function Laporan() {
  const [data, setData] = useState([
    {
      bulan: "Oktober",
      totalBuku: 200,
      totalPeminjam: 60,
    },
  ]);
  const [formData, setFormData] = useState({
    bulan: "",
    totalBuku: "",
    totalPeminjam: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({
      bulan: "",
      totalBuku: "",
      totalPeminjam: "",
    });
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
              <Nav.Link href="#buku">Buku</Nav.Link>
              <NavDropdown title="Data Master" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Peminjaman</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laporan</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="col-md-8">
        <Container>
          <h1>Laporan Bulanan</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="bulan">
              <Form.Label>Bulan</Form.Label>
              <Form.Control type="text" name="bulan" value={formData.bulan} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="totalBuku">
              <Form.Label>Total Buku</Form.Label>
              <Form.Control type="number" name="totalBuku" value={formData.totalBuku} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="totalPeminjam">
              <Form.Label>Total Peminjam</Form.Label>
              <Form.Control type="number" name="totalPeminjam" value={formData.totalPeminjam} onChange={handleChange} />
            </Form.Group>
            <br />
            <div className="d-grid gap-2">
              <Button type="submit">Kirim</Button>
            </div>
          </Form>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Bulan</th>
                <th>Total Buku</th>
                <th>Total Peminjam</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.bulan}</td>
                  <td>{item.totalBuku}</td>
                  <td>{item.totalPeminjam}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default Laporan;
