import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Fundo = styled.View`

    background-color: black;

`


export function Login(){

    const { navigate } = useNavigation()

    return(
        <Fundo>
            <Text>LOGIN PAGEs sssssssss</Text>
        </Fundo>
    )
}