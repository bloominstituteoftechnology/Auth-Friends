import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "react-conflux";
import { FriendsContext } from "Contexts";
import { friends } from "Reducers";
import { App } from "Components/App";
import "./index.scss";

render(
  <BrowserRouter>
    <StateProvider stateContext={FriendsContext} reducer={friends}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
