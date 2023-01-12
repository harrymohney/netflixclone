import React from 'react'
import styled from 'styled-components'

function header() {
  return (
    <Main>
        <New><p>NEW!</p></New>
        <HeaderP>Plans now start at <em>$6.99</em></HeaderP>
        <LearnMore>Learn More</LearnMore>
        <Chevron>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512">
                <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
        </Chevron>
    </Main>
  )
}
export default header

const Main = styled.div`
    display: flex;
    width: 100%
    padding: .05em;
    margin: .05em;
    border: 5px solid;
    justify-content: center;
    p {
        font-size: 1.5rem !important;
        text-align: center;
        margin: .05em;
        padding: .05em;
    }
    em {
        font-weight: bold;
    }
`

const HeaderP = styled.div`
    display: block;
    font-size: 1.1rem;
    margin: 1rem 1rem;
    padding: .2rem .5rem;
`

const New = styled.div`
    background-color: #e50914;
    border-radius: 17px;
    color: #fff;
    font-size: .8rem;
    font-weight: 600;
    margin: 0.5rem 1rem;
    padding: .2rem .5rem;
`
const LearnMore = styled.div`
    color: #0071eb;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1rem 1rem;
    padding: .2rem .5rem;
`

const Chevron = styled.button`
    color: #0071eb;
    width: 4%;
    margin-left: -.8rem;
    margin-top: .2rem;
    background: transparent;
    border: none;
    svg {
        width: 100%;
        height: 100%;
        fill: #0071eb;
    }
`