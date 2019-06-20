import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;
const Page = styled.li`
  margin: 10px;
  text-decoration: none;
  list-style: none;
  outline: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;
`;
class NavComponent extends React.Component {
  clickHandler = page => {
    this.props.history.push(page);
  };
  render() {
    return (
      <Nav>
        <Page onClick={() => this.clickHandler("/")}>Home</Page>
        <Page onClick={() => this.clickHandler("/form")}>Add Friends</Page>
        <Page onClick={() => this.clickHandler("/update")}>Edit Friends</Page>
      </Nav>
    );
  }
}
export default withRouter(NavComponent);
