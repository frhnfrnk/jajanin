import React from 'react'
import styled from 'styled-components'
import Sidebar from '../component/Sidebar/sidebar'


export default function LandingPage() {
  return (
    <Container>
      <div>
        <Sidebar />
      </div>
    </Container>
  )
}


const Container = styled.div`



font-family: 'Josefin';

`


