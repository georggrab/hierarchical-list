// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from ".";
import { fetchHierarchySaga } from "state/ducks/fetchHierarchy";
import { commonTestSetup } from "commonTest";

const { store } = commonTestSetup();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
