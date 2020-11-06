import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar  className="nav" expand="md">
        <Container className="tit">
          <NavbarBrand >Transportion</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
