import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Cleaning from "./components/Cleaning";
import HomePage from "./components/HomePage";
import TvMount from "./components/TvMount/tvmount";
import HomeRepair from "./components/HomeRepair";
import Handyman from "./components/Handyman";
import PhoneRepair from "./components/PhoneRepair";
import UserProfilePage from "./components/ProfilePage";
import CreateService from "./components/CreateService";
import UpdateService from "./components/UpdateService";
import CreateBooking from "./components/CreateBooking";
import { UpdateBooking } from "./components/UpdateBooking";
import ServiceGrid from "./components/ServicesGrid";
import Footer from "./components/Footer";
import AboutTuls from "./components/Abouttuls";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path={'/services'} >
            <ServiceGrid />
          </Route>
          <Route exact path={'/services/cleaning'}>
            <Cleaning />
          </Route>
          <Route exact path={'/services/new'}>
            <CreateService />
          </Route>
          <Route exact path={'/services/:id/bookings/new'} >
            <CreateBooking />
          </Route>
          <Route path={'/services/tvmounting'}>
            <TvMount />
          </Route>
          <Route path={'/services/homerepair'}>
            <HomeRepair />
          </Route>
          <Route path={'/services/handyman'}>
            <Handyman />
          </Route>
          <Route path={'/services/phonerepair'}>
            <PhoneRepair />
          </Route>
          <Route exact path={'/services/:id/edit'}>
            <UpdateService />
          </Route>
          <Route path={'/bookings/:id/edit'} >
            <UpdateBooking />
          </Route>
          <Route exact path="/users/:userId/" >
            <UserProfilePage />
          </Route>
          <Route path={'/about'} >
            <AboutTuls />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
