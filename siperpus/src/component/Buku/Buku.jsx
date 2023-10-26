import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./buku.css";
import axios from "axios";

const Book = () => {
  const [gambar, setGambar] = useState("");
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([]);
  const [idBuku, setIdBuku] = useState("");
  const [judul, setJudul] = useState("");
  const [jenis, setJenis] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tahun, setTahun] = useState("");
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode
  const [editIndex, setEditIndex] = useState(null); // New state to track the book being edited
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://65389527a543859d1bb199cd.mockapi.io/buku")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsEditing(false); // Reset edit mode when the modal is closed
    setEditIndex(null); // Clear the book being edited
  };

  const addBook = () => {
    if ((idBuku, judul, jenis, pengarang, penerbit, tahun, gambar)) {
      const newBook = { idBuku, judul, jenis, pengarang, penerbit, tahun, gambar };
      if (isEditing) {
        // If in edit mode, update the book instead of adding a new one
        const updatedBooks = [...books];
        updatedBooks[editIndex] = newBook;
        setBooks(updatedBooks);
      } else {
        axios
          .post("https://65389527a543859d1bb199cd.mockapi.io/buku", newBook)
          .then((response) => {
            setBooks([...books, response.data]);
          })
          .catch((error) => {
            console.error("Error adding book", error);
          });
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
  };

  const deleteBook = (index) => {
    const bookIdToDelete = books[index].idBuku;
    axios
      .delete(`https://65389527a543859d1bb199cd.mockapi.io/buku/${bookIdToDelete}`)
      .then(() => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
        window.alert("Buku telah dihapus.");
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const updateBook = () => {
    const updatedBook = {
      idBuku,
      judul,
      jenis,
      pengarang,
      penerbit,
      tahun,
      gambar,
    };

    axios
      .put(`https://65389527a543859d1bb199cd.mockapi.io/buku/${books[editIndex].idBuku}`, updatedBook)
      .then(() => {
        const updatedBooks = [...books];
        updatedBooks[editIndex] = updatedBook;
        setBooks(updatedBooks);
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating book", error);
      });
  };

  const filteredBooks = books.filter((book) => book.judul.toLowerCase().includes(searchTerm.toLowerCase()));

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
        <Button className="add-button" variant="primary" onClick={handleShow}>
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
                  <option value="Fiksi">Novel</option>
                  <option value="Non-Fiksi">Majalah</option>
                  <option value="Biografi">Kamus</option>
                  <option value="Biografi">Biografi</option>
                  <option value="Biografi">Komik</option>
                  <option value="Biografi">Manga</option>
                  <option value="Biografi">Karya Ilmiah</option>
                  <option value="Biografi">Ensiklopedia</option>
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
                if (isEditing) {
                  updateBook();
                } else {
                  addBook();
                }
                const message = isEditing ? "Buku berhasil diperbarui" : "Buku berhasil ditambahkan.";
                window.alert(message);
              }}
            >
              {isEditing ? "Simpan" : "Tambah"}
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="search-bar">
          <Form.Control type="text" placeholder="Cari buku..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

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
            {filteredBooks.map((book, index) => (
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
