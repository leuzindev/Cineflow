import styled from "styled-components/native";
import { Image, SafeAreaView } from "react-native"
import Hamburger from '../../assets/hamburger.svg'
import Avatar from '../../assets/avatar.svg'


export const HeaderContainer = styled(SafeAreaView)`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #202024;
    
`;

export const LogoHome = styled(Image)`
  
    object-fit: contain;
`

export const HamburgerSvg = styled(Hamburger)`

    object-fit: contain;
`

export const AvatarSvg = styled(Avatar)`
  
    object-fit: contain;
`

export const LabelProfile = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;

`