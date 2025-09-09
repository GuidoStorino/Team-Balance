import React, { useState } from "react";
import JugadorForm from "../components/JugadorForm";
import { useJugadores } from "../hooks/useJugadores";

function Jugadores({ irAEquipos }) {
  const { jugadores, agregar, eliminar } = useJugadores();
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleSeleccion = (nombre) => {
    setSeleccionados((prev) =>
      prev.includes(nombre)
        ? prev.filter((n) => n !== nombre)
        : [...prev, nombre]
    );
  };

  const confirmarSeleccion = () => {
    if (seleccionados.length < 2) {
      alert("Debes seleccionar al menos 2 jugadores.");
      return;
    }
    const jugadoresSeleccionados = jugadores.filter((j) =>
      seleccionados.includes(j.nombre)
    );
    irAEquipos(jugadoresSeleccionados);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestionar jugadores</h1>

      <h2>Agregar nuevo jugador</h2>
      <JugadorForm onAgregar={agregar} />

      <h2>Jugadores guardados</h2>
      <ul>
        {jugadores.map((j, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={seleccionados.includes(j.nombre)}
                onChange={() => toggleSeleccion(j.nombre)}
              />
              {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase})
            </label>
            <button
              onClick={() => eliminar(j.nombre)}
              style={{ marginLeft: "10px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {jugadores.length >= 2 && (
        <button onClick={confirmarSeleccion} style={{ marginTop: "20px" }}>
          Armar equipos con seleccionados
        </button>
      )}
    </div>
  );
}

export default Jugadores;
