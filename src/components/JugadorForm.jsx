import React, { useState } from "react";
import "./JugadorForm.css";

function JugadorForm({ onAgregar, onGuardar }) {
  const [nombre, setNombre] = useState("");
  const [velocidad, setVelocidad] = useState(5);
  const [defensa, setDefensa] = useState(5);
  const [pase, setPase] = useState(5);
  const [habilidad, setHabilidad] = useState(5);
  const [pegada, setPegada] = useState(5);
  const [mensaje, setMensaje] = useState("");

  const resetForm = () => {
    setNombre("");
    setVelocidad(5);
    setDefensa(5);
    setPase(5);
    setHabilidad(5);
    setPegada(5);
  };

  const handleAgregar = () => {
    if (!nombre) {
      setMensaje("⚠️ El jugador debe tener un nombre");
      return;
    }
    const jugador = { nombre, velocidad, defensa, pase, habilidad, pegada };
    onAgregar?.(jugador);
    setMensaje(`✅ ${nombre} agregado al partido`);
    resetForm();
    setTimeout(() => setMensaje(""), 3000); // borra después de 3s
  };

  const handleGuardar = () => {
    if (!nombre) {
      setMensaje("⚠️ El jugador debe tener un nombre");
      return;
    }
    const jugador = { nombre, velocidad, defensa, pase, habilidad, pegada };
    onGuardar?.(jugador);
    setMensaje(`✅ ${nombre} guardado correctamente`);
    resetForm();
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="jugador-form">
      <input
        className="nombre-input"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <div className="slider-group">
        <label>Velocidad: {velocidad}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={velocidad}
          onChange={(e) => setVelocidad(Number(e.target.value))}
        />
      </div>

      <div className="slider-group">
        <label>Defensa: {defensa}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={defensa}
          onChange={(e) => setDefensa(Number(e.target.value))}
        />
      </div>

      <div className="slider-group">
        <label>Pase: {pase}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={pase}
          onChange={(e) => setPase(Number(e.target.value))}
        />
      </div>

      <div className="slider-group">
        <label>Habilidad: {habilidad}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={habilidad}
          onChange={(e) => setHabilidad(Number(e.target.value))}
        />
      </div>

      <div className="slider-group">
        <label>Pegada: {pegada}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={pegada}
          onChange={(e) => setPegada(Number(e.target.value))}
        />
      </div>

      <div className="button-group">
        <button onClick={handleAgregar}>Agregar al partido</button>
        <button onClick={handleGuardar} className="guardar-btn">
          Guardar jugador
        </button>
      </div>

      {mensaje && <div className="mensaje-feedback">{mensaje}</div>}
    </div>
  );
}

export default JugadorForm;
