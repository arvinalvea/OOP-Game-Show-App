/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("May the force be with you"),
            new Phrase("Show me the money"),
            new Phrase("My precious"),
            new Phrase("Nobody puts Baby in a corner"),
            new Phrase("Carpe Diem"),
        ];
        this.activePhrase = null;
    }

    /**
     * Selects random phrase from phrases property
     *  @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        const randomPhrase = this.phrases[
            Math.floor(Math.random() * this.phrases.length)
        ];

        return randomPhrase;
    }
}
