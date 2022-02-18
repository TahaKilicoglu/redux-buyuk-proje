import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavLink,
  NavItem,
  NavbarToggler,
  Nav,
  NavbarBrand,
  Collapse,
  Button,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="dark"
          className="navbar-dark navbar-expand-md"
          style={{
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <NavbarBrand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Sepet Uygulaması
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    to="/saveproduct"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Ürün Ekle{" "}
                  </Link>
                </NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
