import React, { useState } from "react";
import { Container, Form, Button, Table, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./peminjaman.css";

function Peminjaman() {
  const [data, setData] = useState([
    {
      nomorPeminjaman: "P001",
      namaPeminjam: "Toto Rohimin",
      idBuku: "B001",
      tanggalPeminjaman: "2023-10-01",
      tanggalPengembalian: "2023-10-03",
    },
    {
      nomorPeminjaman: "P002",
      namaPeminjam: "Wina Nurhaena",
      idBuku: "B002",
      tanggalPeminjaman: "2023-10-01",
      tanggalPengembalian: "2023-10-03",
    },
    {
      nomorPeminjaman: "P003",
      namaPeminjam: "Udin Awaludin",
      idBuku: "B003",
      tanggalPeminjaman: "2023-10-01",
      tanggalPengembalian: "2023-10-05",
    },
    {
      nomorPeminjaman: "P004",
      namaPeminjam: "Husen",
      idBuku: "B004",
      tanggalPeminjaman: "2023-10-02",
      tanggalPengembalian: "2023-10-05",
    },
    {
      nomorPeminjaman: "P005",
      namaPeminjam: "Hasan",
      idBuku: "B005",
      tanggalPeminjaman: "2023-10-02",
      tanggalPengembalian: "2023-10-06",
    },
    {
      nomorPeminjaman: "P006",
      namaPeminjam: "Siti Asiyah",
      idBuku: "B006",
      tanggalPeminjaman: "2023-10-02",
      tanggalPengembalian: "2023-10-05",
    },
    {
      nomorPeminjaman: "P007",
      namaPeminjam: "Ujang Rohmat",
      idBuku: "B007",
      tanggalPeminjaman: "2023-10-03",
      tanggalPengembalian: "2023-10-07",
    },
    {
      nomorPeminjaman: "P008",
      namaPeminjam: "Waludin",
      idBuku: "B008",
      tanggalPeminjaman: "2023-10-03",
      tanggalPengembalian: "2023-10-08",
    },
    {
      nomorPeminjaman: "P009",
      namaPeminjam: "Hasanah Nur",
      idBuku: "B009",
      tanggalPeminjaman: "2023-10-04",
      tanggalPengembalian: "2023-10-10",
    },
    {
      nomorPeminjaman: "P010",
      namaPeminjam: "Toto Rahman",
      idBuku: "B010",
      tanggalPeminjaman: "2023-10-04",
      tanggalPengembalian: "2023-10-11",
    },
  ]);
  const [formData, setFormData] = useState({
    nomorPeminjaman: "",
    namaPeminjam: "",
    idBuku: "",
    tanggalPeminjaman: "",
    tanggalPengembalian: "",
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
      nomorPeminjaman: "",
      namaPeminjam: "",
      idBuku: "",
      tanggalPeminjaman: "",
      tanggalPengembalian: "",
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
      <div className="col-md-8">
        <Container>
          <h1>Peminjaman Buku</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nomorPeminjaman">
              <Form.Label>Nomor Peminjaman</Form.Label>
              <Form.Control type="text" name="nomorPeminjaman" value={formData.nomorPeminjaman} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="namaPeminjam">
              <Form.Label>Nama Peminjam</Form.Label>
              <Form.Control type="text" name="namaPeminjam" value={formData.namaPeminjam} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="idBuku">
              <Form.Label>ID Buku</Form.Label>
              <Form.Control type="text" name="idBuku" value={formData.idBuku} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="tanggalPeminjaman">
              <Form.Label>Tanggal Peminjaman</Form.Label>
              <Form.Control type="date" name="tanggalPeminjaman" value={formData.tanggalPeminjaman} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="tanggalPengembalian">
              <Form.Label>Tanggal Pengembalian</Form.Label>
              <Form.Control type="date" name="tanggalPengembalian" value={formData.tanggalPengembalian} onChange={handleChange} />
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
                <th>Nomor Peminjaman</th>
                <th>Nama Peminjam</th>
                <th>ID Buku</th>
                <th>Tanggal Peminjaman</th>
                <th>Tanggal Pengembalian</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.nomorPeminjaman}</td>
                  <td>{item.namaPeminjam}</td>
                  <td>{item.idBuku}</td>
                  <td>{item.tanggalPeminjaman}</td>
                  <td>{item.tanggalPengembalian}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default Peminjaman;
