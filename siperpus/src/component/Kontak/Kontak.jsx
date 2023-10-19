import React from "react";
import "./kontak.css";

function Kontak() {
  return (
    <section id="kontak">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>KONTAK</h1>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-md-4">
            <p>Kp. Panyadap RT 03/RW 11 - Desa Panyadap</p>
            <p>Kec. Solokanjeruk - Kab. Bandung</p>
            <p>Jawa Barat - Indonesia</p>
            <br />
            <br />
            <p>
              <b>Phone:</b> +62 812 2322 2680
            </p>
            <p>
              <b>Email:</b> totorohimin20@gmail.com
            </p>
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
  );
}

export default Kontak;
