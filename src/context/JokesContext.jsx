import {createContext, useState} from 'react';

export const JokesContext = createContext();

const initialJoke = {
    id: 0,
    type: 'General',
    setup: 'What do you call a fish wearing a bowtie?',
    punchline: 'Sofishticated',
    isLoading: false,
    rating: null,
    isJokePageOn: true
}

export const JokesContextProvider = ({children}) =>{
    const [jokesInfo, setJokesInfo] = useState(initialJoke);
    const states = {
        jokesInfo,
        setJokesInfo
    }
    return <JokesContext.Provider value={{...states}}>
        {children}
    </JokesContext.Provider>
}