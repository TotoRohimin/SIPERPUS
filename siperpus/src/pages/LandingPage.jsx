import React from "react";
import Beranda from "../component/Beranda/Beranda";
import Tentang from "../component/Tentang/Tentang";
import Footer from "../component/Kontak/footer";
import Kontak from "../component/Kontak/Kontak";

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
