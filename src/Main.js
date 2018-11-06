import React from 'react';

export default function Main() {
    return(
    <main role="main">
        <section label="GuessEval">
            <h2>
                Make your Guess!
        </h2>

            <form>
                <input type="number" className="guess-input" min="0" max="100" placeholder="Enter your Guess" required />
                <button type="submit" className="guess-button" placeholder="Guess!" />
            </form>
            <p>
                Guess #
            <span id="count">
                    0
            </span>
            </p>
            <ul id="guess-list" className="guesses-box"></ul>
        </section>
    </main>
    );
}
