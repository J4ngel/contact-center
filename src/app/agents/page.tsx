'use client'
import { useCallback, useEffect, useState } from "react";
import { Agent, statusAgent } from "../../../lib/models/agent";
import { fetchAgents } from "../../../lib/api/agents";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Table } from "@/components/Table";
import { AgentFilter } from "../../../lib/models/filter";
import { createWebSocket } from "../../../lib/ws/socket";

export default function AgentsPage() {
    const [agents, setAgents] = useState<Agent[]>([])
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const filter:AgentFilter = {
      state: searchParams.get('status') || '',
      name: searchParams.get('name') || ''
    } 

    useEffect(()=>{
        fetchAgents().then(setAgents)

        const socket = createWebSocket('agents', (data) => {
          if (data.data.type === "agent_update") {
            setAgents((prev) =>
              prev.map((agent) =>
                agent.name === data.data.agent.name ? { ...agent, ...data.data.agent } : agent
              )
            );
          }
        });
    
        return () => socket.close();
    },[])

    const createQueryString = useCallback(
      (name: string, value:string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name,value)

        return params.toString()
      },[searchParams]
    )

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>, param:string) => {
        const value = event.target.value
        router.push(`${pathName}?${createQueryString(param, value)}`)
    }

    const verifyFilterAgent = (agent:Agent):boolean=>{
      const name = agent.name.toLowerCase().includes(filter.name.toLowerCase()) 
      const status = agent.status === filter.state || !filter.state
      return name && status
    }

    const filteredAgents = agents.filter((agent) => verifyFilterAgent(agent))
     

    return (
      <main className="p-6 flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Lista de Agentes</h1>
        <div className="flex flex-wrap w-full gap-5 items-center">
          <h2>Filtrar por:</h2>
          
          <input onChange={(e)=>handleFilterChange(e,'name')} className="w-96" type="text" placeholder="Nombre..."/>
          
          <label className="">
          Estado:
          <select className="p-1.5 ml-2" onChange={(e)=>handleFilterChange(e,'status')} value={filter.state}>
            <option value=''>Todos</option>
            {statusAgent.map((status, index)=>(
              <option key={index} value={status} className="capitalize">{status}</option>
            ))}
          </select>
          </label>
        </div>

        <Table 
          headers={['nombre', 'estado','tiempo de espera']} 
          data={filteredAgents} 
          renderRow={(agent, odd)=>(
            <>
              <td className={`p-1  border-l`}>{agent.name}</td>
              <td className={`p-1 border-r border-l ${odd&&'border-gray-300'}`}>{agent.status}</td>
              <td className={`p-1 border-r`}>{agent.waitTime} min</td>
            </>
          )} />
      </main>
    );
  }
  