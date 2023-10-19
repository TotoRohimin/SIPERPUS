import React from "react";
import { Card, Button } from "react-bootstrap";
import perpusPicture1 from "/cover1.jpg";
import perpusPicture2 from "/cover2.jpg";
import perpusPicture3 from "/cover3.jpg";

function Tentang() {
  return (
    <div>
      <section id="contact-us">
        <div className="container">
          <div className="row text-center">
            <div className="#">
              <h1>Buku Favorit SIPERPUS</h1>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <Card style={{ width: "18rem", float: "left", margin: "40px" }}>
              <Card.Img variant="top" src={perpusPicture1} />
              <Card.Body>
                <Card.Title>Perspektif Pendidikan dalam Bingkai Ilmu dan Tokoh</Card.Title>
                <Button variant="primary">Lihat Detail</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", float: "left", margin: "40px" }}>
              <Card.Img variant="top" src={perpusPicture2} />
              <Card.Body>
                <Card.Title>Pelakor</Card.Title>
                <Button variant="primary">Lihat Detail</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", float: "left", margin: "40px" }}>
              <Card.Img variant="top" src={perpusPicture3} />
              <Card.Body>
                <Card.Title>Menanti Restu Langit</Card.Title>
                <Button variant="primary">Lihat Detail</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tentang;
