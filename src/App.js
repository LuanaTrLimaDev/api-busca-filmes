import React, { useState, useEffect } from "react";
import api from "./api";

export default function App() {
  const [filmes, setFilmes] = useState([])

  async function getFilmes () {
    const response = await api.get("");
    console.log(response);
    setFilmes(response.data);
  }

  useEffect(() => {
    getFilmes();
  }, [])

  return (
    <div>
      <h1>Listar os Filmes</h1>
      {filmes.map(filme => (
        <li key={filme.show.id}>
          <h2>
            <strong>Título do filme: </strong>
            {filme.show.name}
          </h2>
          <p>
            {filme.show.url}
          </p>
        </li>
      ))}
    </div>
  );
}
