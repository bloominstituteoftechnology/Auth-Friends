import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  margin: 10px;

  background: #99c0ff;

  flex: 1;
  max-width: 300px;

  border: 1px dashed #7f7f7f;
  border-radius: 7px;

  position: relative;
`

export const Line = styled.p`
  font-size: 16px;
  margin: 5px 0;
  margin-right: 20px;
`

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`