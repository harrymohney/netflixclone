import React from 'react'
import styled from 'styled-components'

function hero() {
  return (
    <Main> 
        <TitleText>
            Unlimited movies, TV shows, and more.
        </TitleText>
    </Main>
  )
}

export default hero

const Main = styled.div`
    width: 100%;
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/47f24d30-4cbd-4d2d-b165-bd00a01f273d/US-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg");
`

const TitleText = styled.div`
`