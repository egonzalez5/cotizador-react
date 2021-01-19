import React from 'react';
import styled from 'styled-components'


const ContenederHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <ContenederHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenederHeader>
    )
}

export default Header
