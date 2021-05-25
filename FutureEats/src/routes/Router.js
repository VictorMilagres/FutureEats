import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  AdressEditPage,
  CartPage,
  HomePage,
  LoginPage,
  ProfileEditPage,
  ProfilePage,
  RegisterProfilePage,
  RegisterAdressPage,
  RestaurantPage,
  SearchPage,
  SplashScreenPage
} from "pages/";

function Router() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/">
          <SplashScreenPage />
        </Route>

        <Route exact path="/feed">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/register/adress">
          <RegisterAdressPage />
        </Route>

        <Route exact path="/register/profile">
          <RegisterProfilePage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route exact path="/restaurant/:id">
          <RestaurantPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/profile/edit/profile">
          <ProfileEditPage />
        </Route>

        <Route exact path="/profile/edit/adress">
          <AdressEditPage />
        </Route>

        <Route>
          <h1>Error 404 - Página Não Encontrada</h1>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default Router;
