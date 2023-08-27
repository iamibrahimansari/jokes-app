import {useJokeContext} from '../../hooks/useJokeContext';
import {FooterContainer, Button} from './Footer.styled';

const Footer = () =>{
    const {jokesInfo: {id, setup, punchline, rating}, setJokesInfo} = useJokeContext();
    const handleJoke = async () =>{
        setJokesInfo(prev => ({...prev, isLoading: true}));
        try{
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const {id, type, setup, punchline} = await response.json();
            setJokesInfo({id, type: type[0].toUpperCase() + type.slice(1), setup, punchline, isLoading: false, rating: null, isJokePageOn: true});
        }catch(error){
            console.error(error.message);
        }
    }
    const handleBookmark = () =>{
        localStorage.setItem(`joke-${id}`, JSON.stringify({identity: `joke-${id}` ,identifier: `${setup} ${punchline}`, rating}));
    }
    return <FooterContainer>
        <Button onClick={handleJoke}>New Joke</Button>
        <Button onClick={handleBookmark}>Bookmark</Button>
    </FooterContainer>
}

export default Footer;