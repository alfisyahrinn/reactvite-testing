import React, { useState } from 'react';
import { folio1, folio, folio2, viteLogo } from '../public/index.jsx';
export default function App() {
  const [foto, setFoto] = useState(viteLogo);
  const buku = [
    { nama: 'folio Keren', image: folio1 },
    { nama: 'folio Buk Bakar', image: folio2 },
    { nama: 'folio pertamax', image: folio },
  ];

  const handleChange = (e) => {
    setFoto(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="gambar">Pilih Buku</label>
        <select name="select" id="gambar" onChange={handleChange}>
          <option value={viteLogo} selected>
            pilih foto
          </option>
          {buku.map((item, index) => (
            <option key={index} value={item.image}>
              {item.nama}
            </option>
          ))}
        </select>
      </form>
      <img src={foto} alt="" />
    </div>
  );
}
