import React, { useState } from "react";
import JugadorForm from "../components/JugadorForm";
import { useJugadores } from "../hooks/useJugadores";

function Jugadores({ jugadores, setJugadores, irAEquipos, irAListaJugadores }) {
  const [jugadorNuevo, setJugadorNuevo] = useState(null);

  // Hook de jugadores guardados
  const { jugadoresGuardados, agregar } = useJugadores();

  // Agregar jugador directamente al partido
  const agregarJugadorAlPartido = (jugador) => {
    if (!jugador?.nombre) return;
    setJugadores((prev) => [...prev, jugador]);
    setJugadorNuevo(jugador); // opcional para mostrar feedback
  };

  // Guardar jugador en lista persistente
  const guardarJugador = async (jugador) => {
    if (!jugador?.nombre) return;
    await agregar(jugador);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Crear partido</h1>

      <h2>Agregar nuevo jugador</h2>
      <JugadorForm
        onAgregar={agregarJugadorAlPartido} // agrega al partido
        onGuardar={guardarJugador}          // guarda en storage
      />

      <button onClick={irAListaJugadores} style={{ marginTop: 20 }}>
        Seleccionar jugadores guardados
      </button>

      <h2>Jugadores en el partido</h2>
      <ul>
        {jugadores.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase}, Hab: {j.habilidad}, Peg: {j.pegada})
          </li>
        ))}
      </ul>

      {jugadores.length >= 2 && (
        <button onClick={() => irAEquipos(jugadores)} style={{ marginTop: 20 }}>
          Armar equipos
        </button>
      )}
    </div>
  );
}

export default Jugadores;
