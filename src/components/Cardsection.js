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
                            <CustomCard>
                                <img src={character.image} alt={character.name} />
                                <div className='card-content'>
                                    <div>
                                        <h3>{character.name}</h3>
                                        <p><Life dead={character.status === 'Dead'}>{character.status}</Life> - {character.species}</p>
                                    </div>
                                    
                                    <p>
                                        Last Known Location:
                                        <span className="subText">{character.location['name']}</span>
                                    </p>
                                    <p>
                                        First Seen:
                                        <span className="subText">{character.origin['name']}</span>
                                    </p>
                                </div>
                            </CustomCard>
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
` 

const CustomCard = styled.div`
    width: 500px;
    display: flex;
    background-color: #2f0d1f;
    margin-bottom: 20px;
    border-radius: 10%;

    img{
        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;
        width: 250px;
    }

    div.card-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;

        span.subText{
            display: block;
        }
    }
`

const Life = styled.span`
    color: ${pr => pr.dead ? pr.theme.alertColor : pr.theme.safeColor};
    font-weight: bold;
    text-shadow: 0px 0px 5px rgba(255, 255, 255 , .1)
` 
