import {useState, useEffect} from 'react';

import {FaStar, FaRegStar, FaTrashAlt} from 'react-icons/fa';

import {useJokeContext} from '../../hooks/useJokeContext';

import {ModalContainer, JokeContainer, Joke, Rating, CloseBtn} from './Modal.styled';

const styleDeleteBtn = {
    color: 'red', 
    textAlign: 'right', 
    cursor: 'pointer'
}

const Modal = () =>{
    const [allJokes, setAllJokes] = useState(null);
    const {setJokesInfo} = useJokeContext();
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while(i--){
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    useEffect(() => {
        setAllJokes(values);
    }, []);

    const deleteJoke = identity =>{
        localStorage.removeItem(identity);
        setAllJokes(allJokes.filter(joke => joke.identity !== identity));
    }
    return <ModalContainer>
        {
            !allJokes?.length ?
            <h2 style={{textAlign: 'center'}}>Bookmarked joke will display here</h2> :
            allJokes?.map(joke => {
                return <JokeContainer key={joke.identifier}>
                    <Joke>
                        {joke.identifier}
                    </Joke>
                    <Rating>
                        {
                            Array.from({length: 5}).map((_, index) => {
                                return <span key={index}>
                                    {
                                        joke.rating >= index + 1 ?
                                        <FaStar style={{color: 'tomato'}} /> :
                                        <FaRegStar />
                                    }
                                </span>
                            })
                        }
                    </Rating>
                    <span style={styleDeleteBtn} onClick={() => deleteJoke(joke.identity)}>{<FaTrashAlt />}</span>
                </JokeContainer>
            })
        }
        <CloseBtn onClick={() => setJokesInfo(prev => ({...prev, isJokePageOn: true}))}>Close</CloseBtn>
    </ModalContainer>
}

export default Modal;