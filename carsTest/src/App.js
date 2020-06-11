import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cars from "./pages/Cars";
import Header from "./components/header";
import MainPage from "./pages/Main";
import Car from "./pages/Car";
import Admin from "./pages/Admin";
import AdminEdit from "./pages/AdminEdit";
import AdminAddNewCar from "./pages/AdminAddNewCar";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/gallery/cars" component={Cars} />
        <Route path="/gallery/car/:id" component={Car} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/cars/:id/edit" component={AdminEdit} />
        <Route path="/admin/cars/new" component={AdminAddNewCar} />
      </Switch>
    </Router>
  );
}

export default App;
