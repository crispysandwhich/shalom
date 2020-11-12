import React from 'react';
import styled from 'styled-components';

function CardSection({characters}) {
    console.log(characters)
    return (
        <MainSection>
            <header>
                <h2>de_Rick and Morty section</h2>
                <p>
                    I dont really know why but i thought this was a cool tv show, i hope some of you guys saw it. We are basically using an API to get the requests from the server to send us this type of information. So thats preety cool... right? I hope you guys are amazed!
                </p>
            </header>
            

            <CardContainer>
                {
                    characters.map((character) => {
                        return (
                            <CharacterCard>
                                <img src={character.image} alt={character.name} />
                                <div className="characterCard-content">
                                    <div>
                                        <h3>{character.name}</h3>
                                        <p><Life live={character.status}>{character.status}</Life> - {character.species}</p>
                                    </div>
                                    <p>
                                        Last Known Location:
                                        <span className="subtitle">{character.location['name']}</span>
                                    </p>
                                    <p>
                                        First Seen:
                                        <span className="subtitle">{character.origin['name']}</span>
                                    </p>
                                </div>
                            </CharacterCard>
                        )
                    })
                }
            </CardContainer>

        </MainSection>
    )
}

export default CardSection;


const MainSection = styled.section`
    width: 100%;
    background-color: #00000c;
    color: #fff;

    header{
        padding: 1.5rem;
        text-align: center;

        h2{
            font-size: 2rem;
            text-transform: capitalize;
            padding-bottom: 10px;
        }
    }
` 
const CardContainer = styled.article`
    max-width: 1550px;
    margin: 0 auto;
    border-color: 1px solid #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;
const CharacterCard = styled.div`
    width: 450px;
    background-color: #1b233f;
    margin-bottom: 20px;
    display: flex;
    border-radius: 5%;

    img{
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
        width: 250px;
    }

    div.characterCard-content{
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        span.subtitle{
            display: block;
            font-size: 12px;
        }

    }

` 
const Life = styled.span`
    color: ${p => p.live === 'Dead' ? p.theme.alertColor : p.theme.okayColor}
` 