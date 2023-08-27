import {useState} from 'react';

import {useJokeContext} from '../../hooks/useJokeContext';

import Loader from '../loader/Loader';

import {
    MainContainer, 
    Joke, 
    Type, 
    Rating
} from './Main.styled';
import {FaRegStar, FaStar} from 'react-icons/fa';

const Main = () => {
    const {jokesInfo: {id, type, setup, punchline, isLoading, rating}, setJokesInfo} = useJokeContext();
    return <MainContainer>
            {
                isLoading ?
                <Loader /> :
                <>
                    <Type>{type}</Type>
                    <Joke>
                        <span style={{color: 'darkcyan'}}>{setup} </span> 
                        <span style={{color: 'green'}}>{punchline}</span>
                    </Joke>
                </>
            }
            <Rating>
                {
                    Array.from({length: 5}).map((_, index) => {
                        return <span onClick={() => setJokesInfo(prev => ({...prev, rating: index + 1}))} key={index}>
                            {
                                rating >= index + 1 ?
                                <FaStar style={{color: 'tomato'}} /> :
                                <FaRegStar />
                            }
                        </span>
                    })    
                }
        </Rating>
    </MainContainer>    
}

export default Main;