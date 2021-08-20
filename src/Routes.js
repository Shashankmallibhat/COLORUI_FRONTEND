import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollReset from "./components/ScrollReset";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/MainLayout/Footer";
import GradColors from "./views/ColorPages/GradColors";
import PlainColors from "./views/ColorPages/PlainColors";
import FlatColors from "./views/ColorPages/FlatColors";
import CombColors from "./views/ColorPages/CombColors";
import HomeView from "./views/pages/HomeView";
import Feature from "./views/pages/HomeView/Feature";
import Services from "./views/pages/HomeView/Services";
import ScheduleCall from "./views/pages/SchduleCall";
import SignIn from "./views/pages/SignIn";
import SignUP from "./views/pages/SignUP";

const renderRoutes = function () {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            <ScrollReset />
            <MainLayout>
              <HomeView {...props} />
            </MainLayout>
          </>
        )}
      />
      <Route path="/signin" render={(props) => <SignIn {...props} />} />
      <Route path="/signup" render={(props) => <SignUP {...props} />} />
      <Route
        path="/services"
        exact
        render={(props) => (
          <MainLayout>
            <ScrollReset />
            <Services {...props} />
            <Footer />
          </MainLayout>
        )}
      />
      <Route
        path="/about"
        exact
        render={(props) => (
          <MainLayout>
            <ScrollReset />
            <Feature {...props} />
            <Footer />
          </MainLayout>
        )}
      />
      <Route path="/scall" render={(props) => <ScheduleCall {...props} />} />
      <Route path="/gradcolors" render={(props) => <GradColors {...props} />} />
      <Route
        path="/plaincolors"
        render={(props) => <PlainColors {...props} />}
      />
      <Route path="/flatcolors" render={(props) => <FlatColors {...props} />} />
      <Route path="/combcolors" render={(props) => <CombColors {...props} />} />
    </Switch>
  );
};

function Routes() {
  return renderRoutes({});
}

export default Routes;
