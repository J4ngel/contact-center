'use client'
import React, { useEffect, useState } from "react";
import { Client } from "../../../lib/models/client";
import { fetchClients } from "../../../lib/api/clients";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClientsPage() {
    const [clients, setClients] = useState<Client[]>([])
    const searchParams = useSearchParams()
    const router = useRouter()
    
    const maxWaitTime = searchParams.get('maxWaitTime')||''

    useEffect(()=>{
        fetchClients().then(setClients)
    },[])

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        router.push(`/clients?maxWaitTime=${value}`)
    }

    const filteredClients = clients
      ? clients.filter((client)=> client.waitTime <= Number(maxWaitTime) || maxWaitTime === '')
      : clients

    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Lista de Clientes</h1>
        <label className="block mb-4">
          Filtrar por tiempo de espera:
          <select className="ml-2 p-2 border rounded" onChange={handleFilterChange} value={maxWaitTime || ""}>
            <option value="">Todos</option>
            <option value="5">Menos de 5 min</option>
            <option value="10">Menos de 10 min</option>
            <option value="15">Menos de 15 min</option>
          </select>
        </label>
        <ul>
            {filteredClients.map((client, index)=>(
                <li key={index} className="p-2 border-b">
                    {client.name} - {client.waitTime} min
                </li>
            ))}
        </ul>
      </main>
    );
  }
  