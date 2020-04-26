import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
margin-top: 20px;
  input {
    border-radius: 10px;
    height: 20px;
    padding: 5px 5px;
    margin-left: 20px;
    width: 250px;
  }
  button {
    background: #66cdaa;
    height: 40px;
    width: 80px;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-family: "FredokaOne-Regular";
    transition: background 0.5s;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      background: orange;
      transition: background 0.5s;
    }
  }
`;

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
   const handleOnChange = ({ target: { value }}) => { setSearch(value) }

    const handleOnSubmit = e => {
        e.preventDefault();
        handleSearch(search)
    }


  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <label>Search users</label>
      <input type="text" onChange={handleOnChange} value={search} />
      <button>Search</button>
    </StyledForm>
  );
};

export default SearchBar;
