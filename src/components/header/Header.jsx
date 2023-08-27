import {useJokeContext} from '../../hooks/useJokeContext';

import {PiCopySimple} from 'react-icons/pi';

import {HeaderContainer, AppName, Icon} from './Header.styled';

const Header = () =>{
    const {jokesInfo: {isJokePageOn}, setJokesInfo} = useJokeContext();
    return <HeaderContainer>
        <AppName>JOKES APPLICATION</AppName>
        <Icon onClick={() => setJokesInfo(prev => ({...prev, isJokePageOn: false}))}>{<PiCopySimple />}</Icon>
    </HeaderContainer>
}

export default Header;