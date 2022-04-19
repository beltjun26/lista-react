import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  /* background-color: red; */
`

export const NoBotFound = styled.div`
  text-align: center;
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

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const EditButton = styled.button`
  background-color: #5dbdf0;
  padding: 1em;
  margin-right: 1em;
`

export const DeleteButton = styled.button`
  background-color: #ed5826;
  padding: 1em;
`

export const SaveButton = styled.button`
  background-color: #1bcf72;
  margin-right: 1em;
  padding: 1em;
`

export const CancelButton = styled.button`
  /* background-color: #ed5826; */
  padding: 1em;
`

export const NameInput = styled.input`
  margin-bottom: 1em;
`

export const PurposeInput = styled.input`
  margin-bottom: 1em;
`