import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  padding: 2rem;
  border-radius: 2px;
  width: 30%;
  margin-bottom: 3rem;
  position: relative;
  font-size: 1.3rem;

  .delete {
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 94%;
    transition: all 200ms;
  }

  .delete:hover {
    color: #ff3f34;
  }

  .btn {
    border: 1px solid black;
    font-size: 1.1rem;
    font-family: inherit;
    transition: all 200ms;
    cursor: pointer;
    margin-top: 2rem;

    &:hover {
      color: white;
      background: black;
    }
  }
`;

export default Card;
