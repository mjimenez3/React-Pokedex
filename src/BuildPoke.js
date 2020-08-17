import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BuildPoke = ({ buildPoke }) => {
  return (
    <div className="form-container">
      <div className="form-title">
        <h1 className="form-title-text">Build Your Own Pokemon</h1>
      </div>
      <Form className="card p-1">
        <Form.Group controlId="formBuildPokemon">
          <Form.Label>
            <h5>
              <strong>
                <em>Pokemon Name</em>
              </strong>
            </h5>
          </Form.Label>
          <Form.Control type="name" placeholder=" i.e. Jimmy SGC GX" />
        </Form.Group>

        <Form.Group controlId="formPokemonAbilities">
          <Form.Label>
            <h5>
              <strong>
                <em>Abilities</em>
              </strong>
            </h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. allows you to search your deck for this Pokemon's evolution."
          />
        </Form.Group>
        <Form.Group controlId="formPokemonAttacks">
          <Form.Label>
            <h5>
              <strong>
                <em>Attacks</em>
              </strong>
            </h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="i.e. Tsunami Scream - Attack does 170 damage."
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" label="Choose Pokemon Type">
          <Form.Check type="checkbox" label="Dragon" />
          <Form.Check type="checkbox" label="Fairy" />
          <Form.Check type="checkbox" label="Fighting" />
          <Form.Check type="checkbox" label="Fire" />
          <Form.Check type="checkbox" label="Grass" />
          <Form.Check type="checkbox" label="Water" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
