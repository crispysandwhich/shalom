import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Layout from '../components/layout';


import styled from 'styled-components';


import CardSection from '../components/CardSection';







function App() {

  const [character, setCharacter] = useState([])

  
  // used a used effect so on load it will request a GET to the api to gather the information to avoid the loop
  useEffect(() => {
    // Going to access the rickAndMorty API to gather information to transfer it to the cardSection using axion to gather it and porbably going to use hooks to send information over
    axios.get('https://rickandmortyapi.com/api/character/?page=8')
      .then(res => {
        console.log(res.data)
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  },[])





  return (
    <Layout>
      {/* This is the main hero section */}
      <MainSection>
        <MainSectionContent>
          <h2>Welcome to shalom</h2>
          <p>
            Here in shalom, you will see a verity of amazing things... maybe. We have some cool features here that may get you mind blown... kinda... Hopefully you enjoy and like what you see
          </p>
          <TargetButton>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </TargetButton>
        </MainSectionContent>
      </MainSection>

    {/* This is the card section */}
      <CardSection characters={character} />
    </Layout>
  );
}

export default App;


// These are styles for the main section
const MainSection = styled.section`
  width: 100%;
  background-color: black;
  color: #fff;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MainSectionContent = styled.div`
  
  text-align: center;
  padding: 10px;

  h2{
    font-size: 3rem;
    text-transform: uppercase;
    padding-bottom: 20px;
  }
  p{
    padding-bottom: 20px;
    max-width: 400px;
    margin: 0 auto;
    font-size: 18px;
  }

` 
const TargetButton = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    background-color: blue;
    padding: 10px;
    border: none;
    border-radius: 5px;
    transition: all 500ms ease-in;

    &:hover{
      background-color: white;
      color: #000;
    }
  }


`;