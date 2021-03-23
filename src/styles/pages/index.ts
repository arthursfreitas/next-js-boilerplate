import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  background-color: #ffffff;
`
export const Main = styled.main`
  text-align: center;
`

export const PageTitle = styled.title``

export const Title = styled.h1``

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 1rem;
  color: #fff;
  border: none;
  outline: none;
  font-family: 'Poppins';
`
