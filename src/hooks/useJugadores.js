import { useState, useEffect } from "react";
import { Preferences } from "@capacitor/preferences";

export function useJugadores() {
  const [jugadoresGuardados, setJugadoresGuardados] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const { value } = await Preferences.get({ key: "jugadores" });
      try {
        const parsed = value ? JSON.parse(value) : [];
        // 🔹 Forzar a que siempre sea array
        setJugadoresGuardados(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        setJugadoresGuardados([]); // fallback seguro
      }
    };
    cargar();
  }, []);

  const agregar = async (jugador) => {
    const nuevos = [...jugadoresGuardados, jugador];
    setJugadoresGuardados(nuevos);
    await Preferences.set({ key: "jugadores", value: JSON.stringify(nuevos) });
  };

  const eliminar = async (nombre) => {
    const nuevos = jugadoresGuardados.filter((j) => j.nombre !== nombre);
    setJugadoresGuardados(nuevos);
    await Preferences.set({ key: "jugadores", value: JSON.stringify(nuevos) });
  };

  const modificar = async (jugadorModificado) => {
    const nuevos = jugadoresGuardados.map((j) =>
      j.nombre === jugadorModificado.nombre ? jugadorModificado : j
    );
    setJugadoresGuardados(nuevos);
    await Preferences.set({ key: "jugadores", value: JSON.stringify(nuevos) });
  };

  return { jugadoresGuardados, agregar, eliminar, modificar };
}
