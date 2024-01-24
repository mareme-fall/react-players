// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ nom, team, nationalité, numéroMaillot, age, imageUrl }) => {
    return (
        <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={imageUrl} alt={nom} />
            <Card.Body>
                <Card.Title>{nom}</Card.Title>
                <Card.Text>
                    Team: {team}
                    <br />
                    Nationalité: {nationalité}
                    <br />
                    Numéro Maillot: {numéroMaillot}
                    <br />
                    Age: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Player;
