import React from 'react'
import Head from 'next/head'
import { Button, Main, MainWrapper, PageTitle, Title } from '../styles/pages'

const Home = () => {
  return (
    <MainWrapper>
      <Head>
        <PageTitle>HomePage</PageTitle>
      </Head>

      <Main>
        <Title>Hello World</Title>
        <Button>My button</Button>
      </Main>
    </MainWrapper>
  )
}

export default Home
