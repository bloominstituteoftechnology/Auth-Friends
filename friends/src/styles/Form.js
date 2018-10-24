import styled from 'styled-components'

export const FormContainer = styled.form`
  margin: 10px;
  padding: 20px;
  border: 1px dashed #99c0ff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`

export const FormTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px 0;
`

export const FormText = styled.label`
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  margin-bottom: 10px;
`

export const FormButton = styled.button`
  margin-top: 10px;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: inset 0 0 0 3px transparent;
  border-radius: 5px;
  cursor: pointer;
  background: #99c0ff;
  color: black;
  transition: all 0.3s ease;
  padding: 10px;
  font-size: 18px;

  &:hover {
    background: rgba(0, 0, 0, 0);
    box-shadow: inset 0 0 0 3px #99c0ff;
  }
`
