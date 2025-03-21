import { BaseUser } from "./bases/baseUser";

export const statusAgent = ['disponible' , 'en llamada' , 'en pausa' , 'otro'] as const

export interface Agent extends BaseUser {
    status: typeof statusAgent[number];
}