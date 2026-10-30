# 🌌 Cosmic Gridiron

A browser football simulator where mythic and pop-culture characters play on the field. Build an offense and a defense, then simulate a single game or a full 17-game season.

The goal is to find the **perfect lineup**. Every player is secretly better at some positions than others, and a 17-0 season is only likely if you put the right characters in the right spots.

## How to play

1. Pick your team.
2. Choose 11 players for the offense and 11 for the defense. Each slot is a dropdown.
3. Click **Simulate Full Game** for one game against another team, or **Simulate 17-Game Season** for a full schedule against the other five teams.
4. Review the score, recap, and box score to see how your lineup performed.
5. Click **Copy Result** to share your record and a link that reopens your exact lineup.

Player-position fit ratings stay hidden, so experiment with your lineup and use game results to judge what works.

## Teams

| Team | Theme |
|---|---|
| 🏛️ Olympus Immortals | Myth and legend |
| 👾 Cosmic Horrors | Sci-fi and cryptid monsters |
| 🃏 Shadow Duelists | Card-game duelists |
| ⚡ Pocket Monsters | Collectible creatures |
| 🦸 Mighty Guardians | Superheroes and villains |
| 🌠 Galactic Rebels | Space-opera heroes and villains |

## Running it

No build step or dependencies. Open `index.html` in a browser.

## Project layout

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `style.css` | Styling |
| `app.js` | Rosters, hidden ratings, game simulation, season mode and sharing |

## How it works

- Each player has hidden ratings for ten attributes (throwing, speed, strength, hands, blocking, tackling, coverage, pursuit, awareness). Offense and defense are rated separately.
- Each position weighs those attributes differently. A player's "fit" at a slot decides how well they perform there.
- Games are simulated drive by drive. Stronger lineups score more and give up less, and a weak link hurts the whole unit.
- In season mode your lineup faces the other five teams across 17 games. Opponents are fixed and equally tough.
- The ratings live in `app.js`, so a determined player can read them in the browser's developer tools. Keeping them truly secret would need a server.

## Disclaimer

Unofficial fan project, made for fun and not for profit. Not affiliated with or endorsed by the owners of any characters, names or franchises referenced. All trademarks belong to their respective owners.
