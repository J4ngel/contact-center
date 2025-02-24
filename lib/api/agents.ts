import { Agent } from "../models/agent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchAgents(): Promise<Agent[]>{
    try {
        const res = await fetch(`${API_BASE_URL}/agents`)
        if (!res.ok) throw new Error("Error obteniendo agentes")
        return await res.json()
    } catch (error) {
        console.log(error)
        return MOCK_AGENTS
    }
}

const MOCK_AGENTS: Agent[] = [
    {name: 'Juan Pérez', status: 'disponible', waitTime: 5},
    {name: 'Ana López', status: 'en llamada', waitTime: 10},
    {name: 'Carlos Gómez', status: 'en pausa', waitTime: 3},
    {name: 'Luis Aranda', status: "otro", waitTime: 2},
]