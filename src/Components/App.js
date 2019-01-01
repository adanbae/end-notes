import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; // 1-8
import Notes from "../Routes/Notes";   // 1-8
import Note from "../Routes/Note";   // 1-8
import Add from "../Routes/Add";   // 1-8
import Edit from "../Routes/Edit";   // 1-8

// 1-8
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Notes} />
          <Route path={"/add"} component={Add} />
          <Route path={"/note/:id"} component={Note} />
          <Route path={"/edit/:id"} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
