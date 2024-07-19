import { ReactNode } from 'react'
export interface IUser {
    id: string,
    name: string,
    username: string,
    email:string,
    password: string,
    created_at: Date
}
export interface IHeaderProps {
    callback: () => void
}
export interface IModalProps {
    modalIsOpen: boolean,
    callback: () => void
}
export interface IAuthProviderProps {
    children: ReactNode
}
export interface IAuthContextData {
    users: IUser[],
    signIn: () => void,
    signOut: () => void,
    updateUser: () => void,
    isAuthered: boolean
}
