import React from 'react'
import styled from 'styled-components';

function NavBar() {
    return (
        <header>
            <HeaderContainer id='HeaderContainer'>
                <ShalomHeader>SHALOM</ShalomHeader>

                <nav>
                    <SubNavUL>
                        -home
                        -about
                        -contact
                    </SubNavUL>
                </nav>
            </HeaderContainer>
        </header>
    )
}

export default NavBar;

const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    background-color: grey;
    color: yellow;
    display:flex;
    justify-content: center;
 
` ;

const ShalomHeader = styled.h1`
    position: relative;
    right: -5%;
    font-size: 4rem;
    bottom: -10%;
`;

const SubNavUL = styled.ul`
    position: relative;
    top: 110%;
    left: -68%;
    font-size: 2rem;
    ${'' /* Lyub was here */}
    z-index: 1;
`;