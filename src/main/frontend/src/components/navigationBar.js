import React, { Component } from "react";
import { GiSecretBook } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";

import AuthenticationService from "../service/AuthticationService";

class NavigationBar extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/" className="navbar-brand">
              <GiSecretBook/> Pokedex
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/pokemon">
                Pokemon
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashborad
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(NavigationBar);