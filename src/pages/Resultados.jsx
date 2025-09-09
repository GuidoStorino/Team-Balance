import React from "react";

function Resultados({ equipos, irAInicio }) {
  if (!equipos) return <div>No hay resultados para mostrar.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Resultados del partido</h1>

      <h2>{equipos.nombreA}</h2>
      <ul>
        {equipos.equipoA.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase})
          </li>
        ))}
      </ul>

      <h2>{equipos.nombreB}</h2>
      <ul>
        {equipos.equipoB.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase})
          </li>
        ))}
      </ul>

      <button onClick={irAInicio} style={{ marginTop: "20px" }}>
        Volver al Inicio
      </button>
    </div>
  );
}

export default Resultados;
