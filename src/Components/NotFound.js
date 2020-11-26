import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NotFound(props) {
  return (
    <Container>
      <Jumbotron className="bg-light text-center">
        {props.children ? (
          props.children
        ) : (
          <>
            <h1>Sorry!</h1>
            <h1>could not find the item</h1>
            <p>
              go back to <Link to="/">Notes</Link>
            </p>
          </>
        )}
      </Jumbotron>
    </Container>
  );
}
