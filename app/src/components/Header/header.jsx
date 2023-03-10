import react from "react"
import styled from "styled-components"


const header=()=>{
    return(
        <Cont>
            <Wrap>
                <h1>header</h1>
            </Wrap>
        </Cont>
    )
}
export default header;
const Cont=styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
`
const Wrap=styled.div`
text-align: center;
h1{
    color: white;
}
`