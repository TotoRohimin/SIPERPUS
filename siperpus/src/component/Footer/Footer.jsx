import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row text-center mb-3"></div>
          <div className="row row row-cols-3 text-center">
            <div className="fot-1 col">
              <h1 className="display-4">
                <i>
                  <b>SIPERPUS</b>
                </i>
              </h1>
              <p>
                <b>
                  <i>
                    "Meminjam Buku Lebih Baik <br /> daripada Meminjam Seratus"
                  </i>
                </b>
              </p>
            </div>
            <div className="fot-2 col">
              <p className="title-2">Ikuti Kami</p>
              <a className="btn btn-light btn-link btn-floating btn-lg text-primary m-1" href="https://web.facebook.com/profile.php?id=100074082026038" target="_blank" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-light btn-link btn-floating btn-lg text-info m-1" href="https://twitter.com/kimintomin" target="_blank" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="btn btn-light btn-link btn-floating btn-lg text-danger m-1" href="https://www.instagram.com/toomiinn/" target="_blank" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="fot-3 col">
              <h3 className="title">Menu</h3>
              <ul className="a">
                <li className="b">Beranda</li>
                <li className="b">Tentang</li>
                <li className="b">Kontak</li>
                <li className="b">Buku</li>
                <li className="b">ChatBot AI</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="fot-1">
          <p className="fot-2">
            &copy; 2023 Copyright <b>SIPERPUS</b>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
