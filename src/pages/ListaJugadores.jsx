import React, { useState, useEffect } from "react";
import { useJugadores } from "../hooks/useJugadores";
import EditarJugadorModal from "../components/EditarJugadorModal";

function ListaJugadores({ irAInicio, agregarAlPartido }) {
  const { jugadoresGuardados, eliminar, modificar } = useJugadores();
  const [seleccionados, setSeleccionados] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [editJugador, setEditJugador] = useState(null);

  useEffect(() => {
    const ordenados = [...(jugadoresGuardados || [])].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    setJugadores(ordenados);
  }, [jugadoresGuardados]);

  const toggleSeleccion = (nombre) => {
    setSeleccionados(prev =>
      prev.includes(nombre)
        ? prev.filter(n => n !== nombre)
        : [...prev, nombre]
    );
  };

  const handleAgregarAlPartido = () => {
    const seleccion = jugadores.filter(j => seleccionados.includes(j.nombre));
    if (seleccion.length === 0) return;
    agregarAlPartido(seleccion);  // ✅ agregar al partido actual
    setSeleccionados([]);          // limpia selección
  };

  const handleModificar = (jugador) => setEditJugador(jugador);

  const handleGuardarEdicion = (jugadorModificado) => {
    modificar(jugadorModificado);
    setEditJugador(null);
  };

  return (
    <div className="container">
      <h1>Jugadores guardados</h1>

      {editJugador && (
        <EditarJugadorModal
          jugador={editJugador}
          onGuardar={handleGuardarEdicion}
          onCerrar={() => setEditJugador(null)}
        />
      )}

      {jugadores.length === 0 ? (
        <p>No hay jugadores guardados.</p>
      ) : (
        <ul>
          {jugadores.map((j, i) => (
            <li key={i}>
              <label>
                <input
                  type="checkbox"
                  checked={seleccionados.includes(j.nombre)}
                  onChange={() => toggleSeleccion(j.nombre)}
                />
                {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase}, Gam: {j.habilidad}, Peg: {j.pegada})
              </label>
              <button onClick={() => eliminar(j.nombre)}>❌</button>
              <button onClick={() => handleModificar(j)}>✏️ </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleAgregarAlPartido} className="btn">
        Agregar seleccionados al partido
      </button>
      <button onClick={irAInicio} className="btn">
        Volver al inicio
      </button>
    </div>
  );
}

export default ListaJugadores;
