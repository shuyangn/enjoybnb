import React from "react";
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer/footer';
import SearchContainer from './rooms/search_container';
import RoomShowContainer from './rooms_show/room_show_container';

const App = () => (
  <div>
    {/* <header>
      <NavBarContainer/>
    </header> */}
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <Route exact path="/rooms" component={SearchContainer}/>
      <Route exact path="/rooms/:roomId" component={RoomShowContainer} />
    </Switch>

    {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
    <footer>
      <Footer />
    </footer>
    
  </div>
);

export default App;