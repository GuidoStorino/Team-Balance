export function balancearPorAtributos(jugadores) {
  const equipoA = [];
  const equipoB = [];

  // Copia de jugadores para manipular
  const jugadoresRestantes = [...jugadores];

  // Función para calcular promedio de atributos de un equipo
  const promedioEquipo = (equipo) => {
    if (equipo.length === 0) return { defensa:0, velocidad:0, habilidad:0, pase:0, pegada:0 };
    const sum = equipo.reduce((acc, j) => ({
      defensa: acc.defensa + j.defensa,
      velocidad: acc.velocidad + j.velocidad,
      habilidad: acc.habilidad + j.habilidad,
      pase: acc.pase + j.pase,
      pegada: acc.pegada + j.pegada
    }), {defensa:0, velocidad:0, habilidad:0, pase:0, pegada:0});
    const n = equipo.length;
    return {
      defensa: sum.defensa / n,
      velocidad: sum.velocidad / n,
      habilidad: sum.habilidad / n,
      pase: sum.pase / n,
      pegada: sum.pegada / n
    };
  };

  // Función para calcular "desbalance" si agregamos un jugador a un equipo
  const calcularDesbalance = (equipo, jugador) => {
    const prom = promedioEquipo(equipo.length ? [...equipo, jugador] : [jugador]);
    // Usamos la suma de promedios como métrica
    return prom.defensa + prom.velocidad + prom.habilidad + prom.pase + prom.pegada;
  };

  // Repartimos los jugadores uno por uno
  while (jugadoresRestantes.length > 0) {
    const jugador = jugadoresRestantes.shift();

    // 🔹 1. Si un equipo ya tiene más jugadores, el jugador va al otro
    if (equipoA.length > equipoB.length) {
      equipoB.push(jugador);
      continue;
    }
    if (equipoB.length > equipoA.length) {
      equipoA.push(jugador);
      continue;
    }

    // 🔹 2. Si tienen igual cantidad, decidimos por desbalance
    const desbalanceA = calcularDesbalance(equipoA, jugador);
    const desbalanceB = calcularDesbalance(equipoB, jugador);

    if (desbalanceA <= desbalanceB) {
      equipoA.push(jugador);
    } else {
      equipoB.push(jugador);
    }
  }

  return { equipoA, equipoB };
}
