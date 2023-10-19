import React from "react";
import "./kontak.css";

const Kontak = () => {
  return (
    <div>
      <section id="contact-us">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-md-4">
              <p className="a">This website was created for assignment needs which will continue to be developed by me personally as the creator..</p>
              <p className="b">Therefore, don't forget to continue to support us in developing this website.</p>
            </div>
            <div className="col-md-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" name="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="kontak">
        <div className="container">
          <div className="row text-center mb-3"></div>
          <div className="row text-md-start mt-5 text-center">
            <div className="fot-1 col-md-6 col-lg-4 col-xl-4">
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
            <div className="fot-2 col-md-6 col-lg-4 col-xl-3">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Kontak;
