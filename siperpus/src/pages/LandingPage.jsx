import React from "react";
import Beranda from "../component/Beranda/Beranda";
import Kontak from "../component/Kontak/Kontak";
import Tentang from "../component/Tentang/Tentang";

function LandingPage() {
  return (
    <div>
      <Beranda />
      <Tentang />
      <Kontak />
    </div>
  );
}

export default LandingPage;
