import {useContext} from 'react';
import {JokesContext} from '../context/JokesContext';

export const useJokeContext = () =>{
    const context = useContext(JokesContext);
    if(!context){
        throw Error('JokesContext must be used only inside JokesContextProvider')
    }
    return context;
}