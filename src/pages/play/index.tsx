import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Alert } from "react-bootstrap";

import { HangmanImages } from "./Images";

export function Play(props) {
    const [life, setLife] = useState(6);
    const [letters, setLetters] = useState([]);
    const [currentLetter, setCurrentLetter] = useState("");
    const [isWinner, setIsWinner] = useState(false);
    const [show, setShow] = useState(false);
    const [game, setGame] = useState({});

    let [wrongLetters, setWrongLetters] = useState([]);

    const verifyWord = (letter) => {
        const secretWord = "cantor";
        return secretWord.indexOf(letter);
    };

    const newWord = () => {
        const currentGame = {
            theme: "Profissão",
            qtdLetters: 6,
        };

        setGame(currentGame);

        return currentGame;
    };

    const confirmLetter = () => {
        if (currentLetter === "") {
            setShow(true);
        } else {
            setShow(false);

            const resultVerifyWorld = verifyWord(currentLetter);
            if (resultVerifyWorld === -1) {
                setLife(life - 1);
                setWrongLetters([...wrongLetters, currentLetter]);
            } else {
                let holdLetter = letters;
                holdLetter[resultVerifyWorld] = currentLetter;
                setLetters([...holdLetter]);
            }
            setIsWinner(verifyIsWinner());
            setCurrentLetter("");
        }
    };

    const newGame = () => {
        newWord();
        setLetters([...Array(game.qtdLetters).fill("_ ")]);
        setLife(6);
        setWrongLetters([]);
        setShow(false);
        setIsWinner(false);
    };

    const verifyIsWinner = () => {
        return !letters.includes("_ ");
    };

    let icon = isWinner
        ? solid("trophy")
        : life >= 1
        ? solid("child-reaching")
        : solid("face-dizzy");

    let viewAlert = isWinner ? true : show;

    useEffect(() => {
        const { qtdLetters } = newWord();
        setLetters([...Array(qtdLetters).fill("_ ")]);
    }, []);

    return (
        <div className="App">
            <div className="Play-content">
                <div className="text-white">
                    <h1>
                        {props.title} <FontAwesomeIcon icon={icon} />
                    </h1>
                    <p>
                        Vidas restantes:{" "}
                        <span className={life <= 3 ? "text-danger" : ""}>
                            {life}
                        </span>
                    </p>
                    <h3>Tema: {game.theme}</h3>
                    <p>{letters}</p>
                    <Alert
                        show={viewAlert}
                        variant={isWinner ? "info" : "danger"}
                    >
                        <p>
                            {isWinner
                                ? "Parabéns você acertou a palavra 🏆"
                                : "Ops você tem que informar uma letra 🚫 "}
                        </p>
                    </Alert>
                    <Form>
                        <Form.Group className="mb-3 col-md-8">
                            <Form.Label className="text-white">
                                Digite uma Letra
                            </Form.Label>
                            <Form.Control
                                maxLength={1}
                                placeholder="ex: A"
                                value={currentLetter}
                                onChange={(e) =>
                                    setCurrentLetter(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Button
                            variant="info"
                            onClick={
                                isWinner === true
                                    ? () => newGame()
                                    : life >= 1
                                    ? () => confirmLetter()
                                    : () => newGame()
                            }
                        >
                            {isWinner === true
                                ? "Jogar novamente"
                                : life >= 1
                                ? "Confirmar"
                                : "Jogar novamente"}
                        </Button>
                        <p>
                            {wrongLetters.map((letter, index) =>
                                index === 0 ? `${letter}` : ` - ${letter}`
                            )}
                        </p>
                    </Form>
                </div>
                <div>
                    <HangmanImages lifes={life}></HangmanImages>
                </div>
            </div>
        </div>
    );
}
