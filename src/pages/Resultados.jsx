import React from "react";

function Resultados({ equipos, irAInicio }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>✅ Equipos confirmados</h1>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div>
          <h2>Equipo A</h2>
          <ul>
            {equipos.equipoA.map((j, i) => (
              <li key={i}>{j.nombre} (Puntaje: {j.puntaje})</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Equipo B</h2>
          <ul>
            {equipos.equipoB.map((j, i) => (
              <li key={i}>{j.nombre} (Puntaje: {j.puntaje})</li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={irAInicio} style={{ marginTop: "30px" }}>
        Volver al inicio
      </button>
    </div>
  );
}

export default Resultados;
