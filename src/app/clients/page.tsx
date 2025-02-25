'use client'
import React, { useCallback, useEffect, useState } from "react";
import { Client } from "../../../lib/models/client";
import { fetchClients } from "../../../lib/api/clients";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Table } from "@/components/Table";
import { filterOperations } from "../../../lib/constants/operations";
import { ClientFilter } from "../../../lib/models/filter";

export default function ClientsPage() {
    const [clients, setClients] = useState<Client[]>([])
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    
    const filter:ClientFilter = {
      name: searchParams.get('name') || '',
      waitTime: searchParams.get('waitTime')||'',
      operation: searchParams.get('operation') as typeof filterOperations[number] ||'todos'
    }

    useEffect(()=>{
        fetchClients().then(setClients)
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

    const verifyFilterClient = (client: Client):boolean=>{
      let validWaitTime = true
      if (filter.waitTime.length>0) {
        switch (filter.operation) {
          case 'igual a':
            validWaitTime = client.waitTime === Number(filter.waitTime)
            break;
          
          case 'menor igual':
            validWaitTime = client.waitTime <= Number(filter.waitTime)
            break;
          
          case 'mayor igual':
            validWaitTime = client.waitTime >= Number(filter.waitTime)
            break;
        
          default:
            break;
        } 
      }
      
      const validName = client.name.toLowerCase().includes(filter.name.toLocaleLowerCase()) || filter.name === ''
      
      return validWaitTime && validName
    }

    const filteredClients = clients.filter((client) => verifyFilterClient(client))
      

    return (
      <main className="p-6 flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Lista de Clientes</h1>
        <div className="flex flex-wrap w-full gap-5 items-center">
          <h2>Filtrar por:</h2>
          
          <input onChange={(e)=>handleFilterChange(e, 'name')} className="w-96" type="text" placeholder="Nombre..."/>
          
          <div className="flex items-center gap-2">
            <p>Tiempo de espera:</p>
            <select onChange={(e)=>handleFilterChange(e,'operation')} className="p-1.5 text-center">
              {filterOperations.map((operation, index)=>(
                <option key={index} value={operation==='todos'?'':operation}>{operation}</option>
              ))}
            </select>

            <input 
              onChange={(e)=>handleFilterChange(e, 'waitTime')} 
              className="w-40" 
              type="text" 
              placeholder="Tiempo de espera..."
              disabled={!filter.operation}/>
            
            <p>minutos</p>
          </div>

        </div>

        <Table 
          headers={['nombre', 'tiempo de espera']} 
          data={filteredClients} 
          renderRow={(client, odd)=>(
            <>
              <th className={`p-1 border-l ${odd&&'border-gray-300'}`}>{client.name}</th>
              <th className={`p-1 border-x ${odd&&'border-gray-300'}`}>{client.waitTime} min</th>
            </>
          )} />
      </main>
    );
  }
  