import { filterOperations } from "../constants/operations"
import { statusAgent } from "./agent"

interface BaseFilter {
    name: string
}

export interface AgentFilter extends BaseFilter {
    state: typeof statusAgent[number] | string
}

export interface ClientFilter extends BaseFilter {
    waitTime: string
    operation: typeof filterOperations[number]
}