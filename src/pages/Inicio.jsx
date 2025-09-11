import React from "react";

function Inicio({ irAJugadores, irAListaJugadores }) {
  return (
    <div className="section flex-center">
      <h1>⚽ TeamBalancer</h1>
      <button className="primary" onClick={irAJugadores}>Crear partido</button>
      <button className="secondary" onClick={irAListaJugadores}>Jugadores guardados</button>
    </div>
  );
}

export default Inicio;
