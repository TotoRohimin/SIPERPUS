import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./buku.css";

const Book = () => {
  const [gambar, setGambar] = useState("");
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([
    { gambar: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/31754/100794/1.jpg", judul: "Dilan 1990", idBuku: "B001", jenis: "Fiksi", pengarang: "Pidi Baiq", penerbit: "Mizan", tahun: "2016" },
    { gambar: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/31755/100795/1.jpg", judul: "Dilan 1991", idBuku: "B002", jenis: "Fiksi", pengarang: "Pidi Baiq", penerbit: "Mizan", tahun: "2016" },
    { gambar: "https://assets.kompasiana.com/items/album/2019/03/25/img-20190325-wa0009-5c98787495760e3f4d368524.jpg?t=o&v=770", judul: "Milea", idBuku: "B003", jenis: "Fiksi", pengarang: "Pidi Baiq", penerbit: "Mizan", tahun: "2020" },
    { gambar: "https://cdn.gramedia.com/uploads/items/9786026716897.jpg", judul: "Ancika 1995", idBuku: "B004", jenis: "Fiksi", pengarang: "Pidi Baiq", penerbit: "Mizan", tahun: "2021" },
  ]);
  const [idBuku, setIdBuku] = useState("");
  const [judul, setJudul] = useState("");
  const [jenis, setJenis] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tahun, setTahun] = useState("");
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode
  const [editIndex, setEditIndex] = useState(null); // New state to track the book being edited

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsEditing(false); // Reset edit mode when the modal is closed
    setEditIndex(null); // Clear the book being edited
  };

  const addBook = () => {
    if ((idBuku, judul, jenis, pengarang, penerbit, tahun, gambar)) {
      if (isEditing) {
        // If in edit mode, update the book instead of adding a new one
        const updatedBooks = [...books];
        updatedBooks[editIndex] = { idBuku, judul, jenis, pengarang, penerbit, tahun, gambar };
        setBooks(updatedBooks);
      } else {
        setBooks([...books, { idBuku, judul, jenis, pengarang, penerbit, tahun, gambar }]);
      }
      setGambar("");
      setIdBuku("");
      setJudul("");
      setJenis("");
      setPengarang("");
      setPenerbit("");
      setTahun("");
      handleClose();
    }
  };

  const editBook = (index) => {
    // Open the modal for editing a book
    setGambar(books[index].gambar);
    setIdBuku(books[index].idBuku);
    setJudul(books[index].judul);
    setJenis(books[index].jenis);
    setPengarang(books[index].pengarang);
    setPenerbit(books[index].penerbit);
    setTahun(books[index].tahun);
    setIsEditing(true);
    setEditIndex(index);
    handleShow();
    // Add an alert when the "Edit" button is clicked
    window.alert("Anda akan mengedit buku ini.");
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    window.alert("Buku telah dihapus.");
  };

  return (
    <div id="buku">
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
      <div>
        <Button variant="primary" onClick={handleShow}>
          Tambah Buku
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{isEditing ? "Edit Buku" : "Tambah Buku"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>ID Buku</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Id buku" value={idBuku} onChange={(e) => setIdBuku(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>URL Gambar Buku</Form.Label>
                <Form.Control type="text" placeholder="Masukkan URL gambar buku" value={gambar} onChange={(e) => setGambar(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Judul Buku</Form.Label>
                <Form.Control type="text" placeholder="Masukkan judul buku" value={judul} onChange={(e) => setJudul(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Jenis Buku</Form.Label>
                <Form.Select value={jenis} onChange={(e) => setJenis(e.target.value)}>
                  <option value="">Pilih Jenis Buku</option>
                  <option value="Fiksi">Fiksi</option>
                  <option value="Non-Fiksi">Non-Fiksi</option>
                  <option value="Biografi">Biografi</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Pengarang</Form.Label>
                <Form.Control type="text" placeholder="Masukkan pengarang" value={pengarang} onChange={(e) => setPengarang(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Penerbit</Form.Label>
                <Form.Control type="text" placeholder="Masukkan penerbit" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tahun Terbit</Form.Label>
                <Form.Control type="text" placeholder="Masukkan tahun terbit" value={tahun} onChange={(e) => setTahun(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                addBook();
                const message = isEditing ? "Buku berhasil diedit." : "Buku berhasil ditambahkan.";
                window.alert(message);
              }}
            >
              {isEditing ? "Simpan" : "Tambah"}
            </Button>
          </Modal.Footer>
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Gambar</th>
              <th>Judul</th>
              <th>ID Buku</th>
              <th>Jenis Buku</th>
              <th>Pengarang</th>
              <th>Penerbit</th>
              <th>Tahun Terbit</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>
                  <img src={book.gambar} alt={book.judul} style={{ maxWidth: "100px" }} />
                </td>
                <td>{book.judul}</td>
                <td>{book.idBuku}</td>
                <td>{book.jenis}</td>
                <td>{book.pengarang}</td>
                <td>{book.penerbit}</td>
                <td>{book.tahun}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteBook(index)}>
                    Hapus
                  </Button>
                  <Button variant="info" onClick={() => editBook(index)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Book;
