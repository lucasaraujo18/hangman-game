import React from "react";
import hangman_6 from "../../assets/hangman/hangman-6.png";
import hangman_5 from "../../assets/hangman/hangman-5.png";
import hangman_4 from "../../assets/hangman/hangman-4.png";
import hangman_3 from "../../assets/hangman/hangman-3.png";
import hangman_2 from "../../assets/hangman/hangman-2.png";
import hangman_1 from "../../assets/hangman/hangman-1.png";
import hangman_0 from "../../assets/hangman/hangman-0.png";

export function HangmanImages(lifes: number) {
    let hangman;

    switch (lifes) {
        case 5:
            hangman = hangman_5;
            break;
        case 4:
            hangman = hangman_4;
            break;
        case 3:
            hangman = hangman_3;
            break;
        case 2:
            hangman = hangman_2;
            break;
        case 1:
            hangman = hangman_1;
            break;
        case 0:
            hangman = hangman_0;
            break;
        default:
            hangman = hangman_6;
    }

    return (
        <div>
            <img src={hangman} className="Hangman-image" alt="logo" />
        </div>
    );
}
