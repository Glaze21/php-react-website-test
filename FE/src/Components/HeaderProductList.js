import axios from "axios";
import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";

function HeaderProductList() {
  const handleDelete = () => {
    var skus = [];
    var elements = document.getElementsByClassName("delete-checkbox");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].value === "true") {
        skus.push(elements[i].name);
      }
    }
    if (skus.length !== 0) {
      axios.post("/products/delete", skus).then(() => {
        document.location.reload();
      });
    }
  };
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Container>
            <h3>Product List</h3>
          </Container>
          <Container className="header-button-container">
            <Button variant="success" href="add-product">
              ADD
            </Button>
            <Button
              id="delete-product-btn"
              variant="danger"
              onClick={handleDelete}
            >
              MASS DELETE
            </Button>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderProductList;
