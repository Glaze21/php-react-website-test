import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";

function HeaderProductList() {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Container>
            <h3>Product Add</h3>
          </Container>
          <Container className="header-button-container">
            <Button variant="success" type="submit" form="product_form">
              Save
            </Button>
            <Button id="delete-product-btn" variant="danger" href="/">
              Cancel
            </Button>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderProductList;
