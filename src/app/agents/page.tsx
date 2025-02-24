'use client'
import { useEffect, useState } from "react";
import { Agent, statusAgent } from "../../../lib/models/agent";
import { fetchAgents } from "../../../lib/api/agents";
import { useSearchParams, useRouter } from "next/navigation";

export default function AgentsPage() {
    const [agents, setAgents] = useState<Agent[]>([])
    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedStatus = searchParams.get('status') || ''

    useEffect(()=>{
        fetchAgents().then(setAgents)
    },[])

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const status = event.target.value
        router.push(`/agents?status=${status}`)
    }

    const filteredAgents = selectedStatus
      ? agents.filter((agent) => agent.status === selectedStatus)
      : agents;

    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Lista de Agentes</h1>

        <label>
          Filtrar por estado:
          <select onChange={handleFilterChange} value={selectedStatus}>
            <option value=''>Todos</option>
            {statusAgent.map((status, index)=>(
              <option key={index} value={status} className="capitalize">{status}</option>
            ))}
          </select>
        </label>

        <ul>
            {filteredAgents.map((agent,index)=>(
                <li key={index} className="p-2 border-b">
                    {agent.name} - {agent.status} - {agent.waitTime} min
                </li>
            ))}
        </ul>
      </main>
    );
  }
  