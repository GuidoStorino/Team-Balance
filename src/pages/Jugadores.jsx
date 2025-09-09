import React from "react";
import JugadorForm from "../components/JugadorForm";

function Jugadores({ jugadores, setJugadores, irAEquipos }) {
  const agregarJugador = (jugador) => {
    setJugadores([...jugadores, jugador]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Agregar jugadores</h1>
      <JugadorForm onAgregar={agregarJugador} />

      <h2>Lista de jugadores:</h2>
      <ul>
        {jugadores.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase}, Hab: {j.habilidad}, Peg: {j.pegada})
          </li>
        ))}
      </ul>

      {jugadores.length >= 2 && (
        <button onClick={irAEquipos} style={{ marginTop: "20px" }}>
          Armar equipos
        </button>
      )}
    </div>
  );
}

export default Jugadores;
