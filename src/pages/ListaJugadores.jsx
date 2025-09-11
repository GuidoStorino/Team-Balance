import React, { useState, useEffect } from "react";
import { useJugadores } from "../hooks/useJugadores";
import EditarJugadorModal from "../components/EditarJugadorModal";

function ListaJugadores({ irAInicio, agregarAlPartido }) {
  const { jugadoresGuardados, eliminar, modificar } = useJugadores();
  const [seleccionados, setSeleccionados] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [editJugador, setEditJugador] = useState(null); // jugador que se está editando

  // Ordenar alfabéticamente al cargar
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

    agregarAlPartido(seleccion);  // agrega al partido
    setSeleccionados([]);          // limpia selección
  };

  const handleModificar = (jugador) => {
    setEditJugador(jugador); // abre modal
  };

  const handleGuardarEdicion = (jugadorModificado) => {
    modificar(jugadorModificado); // actualiza en la lista de guardados
    setEditJugador(null);          // cierra modal
  };

  return (
    <div style={{ padding: 20 }}>
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
              <button onClick={() => eliminar(j.nombre)} style={{ marginLeft: 10 }}>❌</button>
              <button onClick={() => handleModificar(j)} style={{ marginLeft: 5 }}>✏️ Modificar</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleAgregarAlPartido} style={{ marginTop: 20 }}>
        Agregar seleccionados al partido
      </button>
      <button onClick={irAInicio} style={{ marginTop: 20, marginLeft: 10 }}>
        Volver al inicio
      </button>
    </div>
  );
}

export default ListaJugadores;
