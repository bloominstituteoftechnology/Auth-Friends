import styled from 'styled-components';
const StyledForm = styled.form`
  border: 1px solid black;
  border-radius: 2px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;

  h2 {
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .text-input {
    outline: none;
    border: 1px solid black;
    border-radius: 2px;
    padding: 0.5rem;
  }

  .btn {
    border: 1px solid black;
    font-size: 1.1rem;
    font-family: inherit;
    transition: all 200ms;
    cursor: pointer;
  }

  .btn:hover {
    color: white;
    background: black;
  }
`;
export default StyledForm;
