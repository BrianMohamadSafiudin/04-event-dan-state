"use client";
import Tombol_1, { Tombol_2 } from "./component/button";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota Brian</h2>
        <Tombol_1/>
        <hr></hr>
        <Tombol_2 isiPesan="Ini Pesan Brian" namaTombol1="Pesan"/>
      </div>
    </>
  );
}
