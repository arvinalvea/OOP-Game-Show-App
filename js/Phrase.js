/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */

    addPhraseToDisplay() {
        console.log(this);
        const randomPhraseArr = this.phrase.split("");
        console.log(randomPhraseArr);

        for (let i = 0; i < randomPhraseArr.length; i++) {
            const li = document.createElement("li");
            const character = randomPhraseArr[i];
            const ul = document.querySelector("#phrase ul");

            li.appendChild(document.createTextNode(character));
            ul.appendChild(li);
            if (character !== " ") {
                li.className = `hide letter ${character}`;
            } else {
                li.className = "space";
            }
        }
    }
}
