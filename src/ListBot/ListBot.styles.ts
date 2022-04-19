import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 30em;
  margin: 0 auto;
  /* background-color: red; */
`

export const Header = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 1em;
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
  width: 100%;
  border: 2px green solid;
  margin-bottom: .2em;
  cursor: pointer;

  &:hover {
    background-color: #757874;
  }
`

export const BotName = styled.p`
  margin: 0;
  font-size: 2rem;
`

export const AddBotButton = styled.button`
  padding: 1em;
  align-self: flex-end;
  margin-bottom: 1em;
`

export const CancelAddButton = styled.button`
  padding: 1em;
`