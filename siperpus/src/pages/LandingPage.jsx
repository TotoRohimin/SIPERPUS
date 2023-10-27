import React from "react";
import Beranda from "../component/Beranda/Beranda";
import Tentang from "../component/Tentang/Tentang";
import Kontak from "../component/Kontak/Kontak";
import Footer from "../component/Footer/Footer";

function LandingPage() {
  return (
    <div>
      <Beranda />
      <Tentang />
      <Kontak />
      <Footer />
    </div>
  );
}

export default LandingPage;
