import React from "react";
import "./index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Link as Linkscr } from "react-scroll";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navItems: [
        { navItemID: 2, navItemName: "Haqqimizda" },
        { navItemID: 3, navItemName: "Kateqoriyalar" },
        { navItemID: 4, navItemName: "Mehsullar" },
        { navItemID: 5, navItemName: "Sebet" },
        { navItemID: 6, navItemName: "Profil" },
        { navItemID: 7, navItemName: "Login" },
      ],
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="navi">
        <Navbar className="container" light expand="md">
          <NavbarBrand href="/">
            <img src="../../../img/logo-green.svg" alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <RouterNavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/"}
                >
                  Ana sehife
                </RouterNavLink>
              </NavItem>
              {/* <NavItem>
                <Linkscr
                  activeClass="active"
                  to="category"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Kateqoriyalar
                </Linkscr>
              </NavItem> */}
              {this.state.navItems.map((navItem) => {
                return (
                  <NavItem key={navItem.navItemID}>
                    <RouterNavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to={`${navItem.navItemName.toLowerCase()}`}
                    >
                      {navItem.navItemName}
                    </RouterNavLink>
                  </NavItem>
                );
              })}
              <NavItem>
                <Linkscr
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Əlaqə
                </Linkscr>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
