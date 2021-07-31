import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollReset from "./components/ScrollReset";
import MainLayout from "./layouts/MainLayout";
// import Footer from "./layouts/MainLayout/Footer";
import HomeView from "./views/pages/HomeView";
// import Feature from "./views/pages/HomeView/Feature";
// import Services from "./views/pages/HomeView/Services";
// import SignUp from "./views/pages/HomeView/SignUp";
import ScheduleCall from "./views/pages/SchduleCall";
import SignIn from "./views/pages/SignIn";
import SignUP from "./views/pages/SignUP";

const renderRoutes = function () {
 return <Switch>
    <Route
      path="/"
      exact
      render={props => (
        <>
          <ScrollReset />
          <MainLayout>
            <HomeView  {...props}/>
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/schedulecall"
      render={props => (
        <>
          <ScrollReset />
          <MainLayout>
            <ScheduleCall {...props}/>
          </MainLayout>
        </>
      )}
    />
   <Route path="/signin"  render={props =>(
     <SignIn />
   )}/>  
   <Route path="/signup"  render={props =>(
     <SignUP />
   )}/> 
    {/* pending pending */}
   {/* <Route path="/services" exact render={props =>(
     <Services />
   )}/>
   <Route path="/about" exact render={props =>(
     <Feature />
   )}/> */}
   <Route path="/scall" render={props =>(
     <ScheduleCall/>
   )}/> 
  </Switch>;
};

function Routes() {
  return renderRoutes({});
}

export default Routes;
