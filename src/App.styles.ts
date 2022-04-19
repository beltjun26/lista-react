import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  /* background-color: red; */
`

export const Header = styled.h1`
  text-align: center;
  margin: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Bot = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  padding: 2em;
  width: 30em;
  border: 2px green solid;
`
export const BotTopContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BotName = styled.p`
  margin: 0;
  font-size: 2rem;
`

export const BotPropose = styled.p`
  margin: 0;
` 

export const ButtonContainer = styled.div`
  align-items: flex-end;
  display: flex;
`

export const EditButton = styled.button`
  padding: 1em;
  margin-right: 1em;
`

export const DeleteButton = styled.button`
  padding: 1em
`