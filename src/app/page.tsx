import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Solución prueba técnica - Visual contact</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="italic">Requerimientos:</p>
          <li className="mb-2">
            Mostrar una lista de agentes: Cada agente tiene un nombre, un estado y un 
            tiempo en espera.
          </li>
          <li>Mostrar una lista de clientes en espera: Cada cliente tiene un nombre y un 
          tiempo de espera.</li>
          <li>Funcionalidad de filtros: Los usuarios deben poder filtrar a los agentes por 
          estado (disponible, en llamada, etc.) y a los clientes por tiempo de espera.</li>
          <li>Interacción con el backend: Implementar llamadas API RESTful para obtener 
          la información inicial de agentes y clientes, y configurar WebSockets para 
          actualizaciones en tiempo real.</li>
          <li> Manejo de estados globales de la aplicación para actualización en tiempo 
          real: Utilizar hooks y/o librerías para obtener la información inicial de agentes y 
          clientes.</li>
          <li>Punto Extra. Actualizar dinámicamente la lista: Utilizar WebSockets para 
          recibir actualizaciones de los estados de los agentes y clientes.</li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/J4ngel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={20}
            height={20}
          />
          Made by Jaime Angel - 2025 
        </a>
      </footer>
    </div>
  );
}
