import React from 'react'
import styled from 'styled-components'

function Cardsection({characters}) {
    console.log(characters)
    return (
        <MainSection>
            <header>
                <h2>de_Rick and Morty section</h2>
                <p>
                    I dont really know why but i thought this was a cool tv show, i hope some of you guys saw it. We are basically using an API to get the requests from the server to send us this type of information. So thats preety cool... right? I hope you guys are amazed!
                </p>
            </header>
            

            <div>
                {
                    characters.map((character) => {
                        return (
                            <div className='characterCard'>
                                <img src={character.image} alt={character.name} />
                                <div>
                                    <h3>{character.name}</h3>
                                    <p>{character.status} - {character.species}</p>
                                    <p>
                                        Last Known Location:
                                        <span>{character.location['name']}</span>
                                    </p>
                                    <p>
                                        First Seen:
                                        <span>{character.origin['name']}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </MainSection>
    )
}

export default Cardsection


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