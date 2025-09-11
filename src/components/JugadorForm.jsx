import React, { useState } from "react";

function JugadorForm({ onAgregar, onGuardar }) {
  const [nombre, setNombre] = useState("");
  const [velocidad, setVelocidad] = useState(1);
  const [defensa, setDefensa] = useState(1);
  const [pase, setPase] = useState(1);
  const [habilidad, setHabilidad] = useState(1);
  const [pegada, setPegada] = useState(1);

  const handleAgregar = () => {
    if (!nombre) {
      alert("El jugador debe tener un nombre");
      return;
    }
    const jugador = { nombre, velocidad, defensa, pase, habilidad, pegada };
    if (typeof onAgregar === "function") {
      onAgregar(jugador); // agrega al partido
    }
    // limpiar formulario
    setNombre(""); setVelocidad(1); setDefensa(1); setPase(1); setHabilidad(1); setPegada(1);
  };

  const handleGuardar = () => {
    if (!nombre) {
      alert("El jugador debe tener un nombre");
      return;
    }
    const jugador = { nombre, velocidad, defensa, pase, habilidad, pegada };
    if (typeof onGuardar === "function") {
      onGuardar(jugador); // guarda en Preferences
      alert(`${nombre} guardado correctamente`);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="number" min={1} max={10} value={velocidad} onChange={(e) => setVelocidad(Number(e.target.value))} />
      <input type="number" min={1} max={10} value={defensa} onChange={(e) => setDefensa(Number(e.target.value))} />
      <input type="number" min={1} max={10} value={pase} onChange={(e) => setPase(Number(e.target.value))} />
      <input type="number" min={1} max={10} value={habilidad} onChange={(e) => setHabilidad(Number(e.target.value))} />
      <input type="number" min={1} max={10} value={pegada} onChange={(e) => setPegada(Number(e.target.value))} />

      <button onClick={handleAgregar}>Agregar al partido</button>
      <button onClick={handleGuardar} style={{ marginLeft: 10 }}>Guardar jugador</button>
    </div>
  );
}

export default JugadorForm;
