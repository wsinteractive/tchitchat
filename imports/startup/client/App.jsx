import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Logged     from '/imports/ui/components/routes/Logged';
import NotLogged  from '/imports/ui/components/routes/NotLogged';
import SideBar    from '/imports/ui/components/SideBar';

import Landing    from '/imports/ui/modules/Landing';
import Rooms      from '/imports/ui/modules/Rooms';
import Users      from '/imports/ui/modules/Users';
import {
  Connexion,
  Inscription,
  Missing,
  Settings,
  Verify
} from '/imports/ui/modules/Account';

const App = () => (
  <Router>
    <SideBar />
    <Switch>
      <Logged       path="/rooms/:roomId?"  component={Rooms}        />
      <Logged       path="/users/:userId?"  component={Users}        />
      <NotLogged    path="/signin"          component={Connexion}    />
      <NotLogged    path="/signup"          component={Inscription}  />
      <Logged       path="/missing"         component={Missing}      />
      <Logged       path="/settings"        component={Settings}     />
      <Logged       path="/verify/:token"   component={Verify}       />
      <NotLogged    path="/"                component={Landing}      />
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;
