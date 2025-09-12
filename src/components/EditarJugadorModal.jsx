import React, { useState } from "react";
import "./EditarJugadorModal.css";

function EditarJugadorModal({ jugador, onGuardar, onCerrar }) {
  const [form, setForm] = useState({ ...jugador });

  const handleChange = (campo, valor) => {
    const num = Math.max(1, Math.min(10, parseInt(valor) || 1)); // límite 1-10
    setForm({ ...form, [campo]: num });
  };

  const handleSubmit = () => {
    onGuardar(form);
    onCerrar();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar {jugador.nombre}</h2>

        {["velocidad", "defensa", "pase", "habilidad", "pegada"].map((campo) => (
          <div key={campo} className="slider-row">
            <label>
              {campo.charAt(0).toUpperCase() + campo.slice(1)}: {form[campo]}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={form[campo]}
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          </div>
        ))}

        <div className="modal-buttons">
          <button onClick={handleSubmit} className="btn-guardar">Guardar</button>
          <button onClick={onCerrar} className="btn-cancelar">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default EditarJugadorModal;
