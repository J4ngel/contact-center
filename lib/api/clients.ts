import { Client } from "../models/client"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchClients(): Promise<Client[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/clients`)
    if (!res.ok) throw new Error("Error obteniendo clientes")
    return await res.json();
  } catch (error) {
    console.error(error);
    return MOCK_CLIENTS;
  }
}

const MOCK_CLIENTS: Client[] = [
  { name: "María González", waitTime: 12 },
  { name: "Pedro Ramírez", waitTime: 7 },
  { name: "Lucía Fernández", waitTime: 15 },
];