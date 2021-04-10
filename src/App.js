import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const Boton = styled.button`
  background-color: tomato;
  padding: 10px 35px;
  text-align: center;
`;

function App() {
  // state frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
    const api = await fetch(url);
    const frase = await api.json();
    console.log(frase);
    guardarFrase(frase[0]);
  };

  // Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Boton onClick={() => consultarAPI()}>Obtener Frase</Boton>
      <Frase frase={frase} />
    </Contenedor>
  );
}

export default App;
