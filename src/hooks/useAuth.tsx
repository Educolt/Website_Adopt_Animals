import { createContext, useContext, useEffect, useState} from 'react'

import { IUser, IAuthProviderProps, IAuthContextData } from '../@types'
// import app api
import {api} from '../services/api';

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({children}: IAuthProviderProps) => {

    const [users, setUsers] = useState<IUser[]>([]);

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        // get user registered
        const loadUser = async () => {
            const response = await api.get('/user');

            const data = response.data;

            setUsers(data)
        } 
        loadUser();
    }, [users]);

    const signIn = () => {
        setIsAuth(true);
    }
    const signOut = () => {
        setIsAuth(false);
    }
    const updateUser = () => {
        setUsers([...users])
    }

    return (
        <AuthContext.Provider value={{ users, signIn, signOut, isAuthered: isAuth, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }