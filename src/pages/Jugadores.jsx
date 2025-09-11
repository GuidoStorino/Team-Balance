import React, { useState } from "react";
import JugadorForm from "../components/JugadorForm";
import { useJugadores } from "../hooks/useJugadores";

function Jugadores({ jugadores, setJugadores, irAEquipos, irAListaJugadores }) {
  const [jugadorNuevo, setJugadorNuevo] = useState(null); // opcional para mostrar info temporal

  // Función para agregar jugador al partido y opcionalmente guardarlo
  const agregarJugadorAlPartido = (jugador) => {
    setJugadores(prev => [...prev, jugador]); // agrega al partido
    setJugadorNuevo(jugador); // opcional para mostrar en pantalla
  };

  // Guardar jugador en la lista de guardados
const { jugadoresGuardados, agregar } = useJugadores();

const guardarJugador = async (jugador) => {
  await agregar(jugador);
};

  return (
    <div style={{ padding: 20 }}>
      <h1>Crear partido</h1>

      <h2>Agregar nuevo jugador</h2>
      <JugadorForm
        onAgregar={agregarJugadorAlPartido} // agrega al partido
        onGuardar={guardarJugador}          // guarda para futuras partidas
      />
      

      <button onClick={irAListaJugadores} style={{ marginTop: 20 }}>
        Seleccionar jugadores guardados
      </button>

      <h2>Jugadores en el partido</h2>
      <ul>
        {jugadores.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase}, Gam: {j.habilidad}, Peg: {j.pegada})
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
