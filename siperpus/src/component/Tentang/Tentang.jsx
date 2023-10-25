import React from "react";
import { Card, Button } from "react-bootstrap";
import perpusPicture1 from "/cover1.jpg";
import perpusPicture2 from "/cover2.jpg";
import perpusPicture3 from "/cover3.jpg";
import "./tentang.css";

function Tentang() {
  return (
    <div>
      <section id="tentang">
        <div className="container">
          <div className="row text-center">
            <div className="#">
              <h1>
                <b>SIPERPUS</b>
              </h1>
              <p>
                SIPERPUS adalah sebuah sistem Peminjaman Buku yang dibuat pada tanggal 17 Oktober 2023, dibuat oleh Mahasiswa Universitas Kebangsaan Republik Indonesia yang sekarang mengikuti Program Studi Independen Kampus Merdeka Batch 5
                di Alterra Academy. Sistem ini dibuat bertujuan untuk memfasilitasi bagi orang-orang yang suka membaca buku serta memudahkan mereka nantinya dalam hal peminjamannya. Pada sistem ini ada satu fitur yang nantinya bisa membantu
                para peminjam buku ketika kebingungan atau gak mau ribet nyari buku, pembuat SIPERPUS ini menyediakan Chatbot AI yang nantinya mengatasi kebingungan tersebut selain itu Chatbot ini bisa diajak berkomunikasi mengenai SIPEPUS
                secara lengkap.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <Card style={{ width: "18rem", float: "left", margin: "40px" }}>
              <Card.Img variant="top" src={perpusPicture1} />
              <Card.Body>
                <Card.Title>Perspektif Pendidikan dalam Bingkai Ilmu dan Tokoh</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", float: "left", margin: "40px" }}>
              <Card.Img variant="top" src={perpusPicture2} />
              <Card.Body>
                <Card.Title>Pelakor</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", float: "left", margin: "40px" }}>
              <Card.Img variant="top" src={perpusPicture3} />
              <Card.Body>
                <Card.Title>Menanti Restu Langit</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tentang;
