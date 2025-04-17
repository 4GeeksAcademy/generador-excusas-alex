const excuses = [
    "No puedo ir porque tengo una cita con el médico.",
    "Me siento mal y necesito descansar.",
    "Tengo un compromiso familiar que no puedo evitar.",
    "Me quedé atrapado en el tráfico.",
    "Olvidé que tenía una reunión programada.",
    "Mi perro se escapó y tengo que buscarlo.",
    "Tuve un problema con mi coche y no puedo salir.",
    "Me surgió un imprevisto y no puedo asistir.",
    "Estoy esperando un paquete importante que debe llegar hoy.",
    "No me siento bien y prefiero no contagiar a nadie."
];

function getExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}

export { getExcuse };