# Contact Center Frontend

Este proyecto es una aplicación frontend desarrollada en Next.js para un centro de contacto (Contact Center) que muestra información sobre los agentes y clientes en espera, con actualizaciones en tiempo real mediante WebSockets.

## 🛠 Tecnologías utilizadas

* Next.js (App Router, SSR y CSR)


* TypeScript

* Tailwind CSS + DaisyUI

* Fetch API para consumo de API RESTful

* WebSockets para actualización en tiempo real

## 📌 Instalación y configuración

1. Clonar el repositorio

2. Instalar dependencias:

    `npm install`

3. Configurar las variables de entorno:
Crea un archivo .env.local en la raíz del proyecto con la URL base de la API:
    ```
    NEXT_PUBLIC_API_BASE_URL=https://api.ejemplo.com
    NEXT_PUBLIC_WEB_SOCKET_URL=https://ws.ejemplo.com
    ```
4. Ejecutar el proyecto en modo desarrollo:

    `npm run dev`

5. El proyecto estará disponible en `http://localhost:3000/` (revisar información mostrada en consola).

## 📂 Estructura del Proyecto
```
contact-center/
│── app/
│   ├── agents/page.tsx         # Página de agentes
│   ├── clients/page.tsx        # Página de clientes
│   ├── layout.tsx              # Layout con navegación
│   ├── page.tsx                # Pagina raíz
│── components/
│   ├── Table.tsx               # Componente Tabla
│── lib/
│   ├── api/
│   │   ├── agents.ts           # Servicio para obtener agentes
│   │   ├── clients.ts          # Servicio para obtener clientes
│   ├── ws/
│   │   ├── socket.ts           # Configuración de WebSockets
│   ├── constants/operations    # Constantes usadas en la aplicación
│   ├── models/                 # Modelos utilizados en la aplicación
│   │   ├── bases/baseUser.ts    
│   │   ├── client.ts    
│   │   ├── agent.ts    
│   │   ├── filter.ts    
│── public/
│── .env.local                  # Variables de entorno
│── package.json
│── README.md
```
## 🎯 Funcionalidades

✅ Listado de Agentes

Muestra la lista de agentes con nombre, estado y tiempo en espera.

Filtros para buscar por estado (disponible, en llamada, en pausa, otro) y por nombre.

Se actualiza en tiempo real con WebSockets.

✅ Listado de Clientes

Muestra la lista de clientes con nombre y tiempo de espera.

Filtros para buscar por tiempo de espera mayor igual, menor igual, o igual a un tiempo dado y por nombre.

Se actualiza en tiempo real con WebSockets.

## 🚀 Renderizado en Next.js

La aplicación utiliza diferentes modos de renderizado según la necesidad:

SSR (Server-Side Rendering): Para obtener datos en tiempo real desde la API.

CSR (Client-Side Rendering): Para actualizar los datos dinámicamente con WebSockets.

🔹 Diferencias entre MPA y SPA

MPA (Multi-Page Application): Cada página requiere una nueva carga desde el servidor.

SPA (Single-Page Application): La navegación es más fluida, sin recargar la página.

Este proyecto es una combinación de ambas estrategias gracias a Next.js.

## 🔄 Conexión con el Backend

La aplicación se comunica con el backend en .NET mediante API RESTful y WebSockets:

API REST: Se usa para obtener los datos iniciales.

WebSockets: Se usa para recibir actualizaciones en tiempo real.

Ejemplo de una llamada a la API:

```
const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/agents`);
const agents = await res.json();
```

Ejemplo de WebSockets:

```
const socket = new WebSocket(process.env.NEXT_PUBLIC_WEB_SOCKET_URL);
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Actualización en tiempo real:", data);
};
```

## ✨ Autor

👨‍💻 Desarrollado por Jaime Andrés Angel Melgarejo