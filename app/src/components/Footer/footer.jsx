import React from 'react'
import styled from "styled-components"

const footer = () => {
  return (
    <div>
    <Container>
    <Wrapper>
    <Wrap>
    <nav>Home</nav>
    <nav>About</nav>
    <nav>Contact Us</nav>
    </Wrap>
    <Wrap>
    <nav>Home</nav>
    <nav>About</nav>
    <nav>Contact Us</nav>
    </Wrap>
    <Wrap>
    <nav>Home</nav>
    <nav>About</nav>
    <nav>Contact Us</nav>
    </Wrap>
    <Wrap>
    <nav>Home</nav>
    <nav>About</nav>
    <nav>Contact Us</nav>
    </Wrap>
    </Wrapper>
    </Container>
    </div>
  )
}

export default footer
const Wrap = styled.div``

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4,3fr);
justify-content: center;

nav{
    color: red;
    font-size: 15px;
    margin: 10px;
}
`

const Container = styled.div`
background-color: aliceblue;
width: 100%;
flex-wrap: wrap;

`