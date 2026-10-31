// Player databases power the team rosters, lineups, and game stats.
const leagueDatabase = {
    pantheon: [
        { id: "p1", name: "Post-Resurrection Jesus", traits: { off: "Phases through pass rushes", def: "Omniscient zone coverage" } },
        { id: "p2", name: "Achilles", traits: { off: "Invulnerable yardage after contact", def: "Devastating goal-line tackler" } },
        { id: "p3", name: "Hermes", traits: { off: "Mach-2 deep route vertical speed", def: "Incredible closing recovery speed" } },
        { id: "p4", name: "Loki", traits: { off: "Creates duplicate mirror route illusions", def: "Bates quarterbacks into interceptions" } },
        { id: "p5", name: "Thor", traits: { off: "Thunderous blocks and catch radii", def: "Shatters offensive line pockets" } },
        { id: "p6", name: "Samson", traits: { off: "Power back that drags defenders", def: "Raw long-haired edge-rush strength" } },
        { id: "p7", name: "Atlas", traits: { off: "Immovable blindside protection", def: "Stops fullbacks dead in their tracks" } },
        { id: "p8", name: "Alexander the Great", traits: { off: "Flawless audible and clock management", def: "Decodes opposing team's playbooks" } },
        { id: "p9", name: "Medusa", traits: { off: "Freezes edge rushers with a glance", def: "Stares down wide receivers to force drops" } },
        { id: "p10", name: "Joan of Arc", traits: { off: "Immense huddle morale boost", def: "Inspirational downfield tracking" } },
        { id: "p11", name: "King Arthur", traits: { off: "Clinical clutch fourth-down execution", def: "Defensive field general coordination" } }
    ],
    monsters: [
        { id: "m1", name: "The Overmind", traits: { off: "Calculates millions of passing vectors", def: "Coordinated hive-mind blitz grids" } },
        { id: "m2", name: "Godzilla", traits: { off: "Unstoppable short-yardage fullback mass", def: "Atomic-powered interior run stuffer" } },
        { id: "m3", name: "Xenomorph Queen", traits: { off: "Agile cutting and tail-vaulting speed", def: "Acidic blood neutralizes blocks" } },
        { id: "m4", name: "The Predator", traits: { off: "Cloaked stealth post-route running", def: "Thermal tracking lock-down coverage" } },
        { id: "m5", name: "The Kraken", traits: { off: "Reaches over multiple defenders", def: "Wraps up quarterbacks with 8 tentacles" } },
        { id: "m6", name: "The Thing", traits: { off: "Mimics defender blocking keys", def: "Shapeshifts to force fumble strips" } },
        { id: "m7", name: "Cloverfield Monster", traits: { off: "Swats high passes down into catch windows", def: "Colossal physical field presence" } },
        { id: "m8", name: "A Sandworm", traits: { off: "Collapses interior defensive fronts", def: "Burrows to cause backfield sacks" } },
        { id: "m9", name: "The Demogorgon", traits: { off: "Sprints through spatial rifts", def: "Acoustic tracking blind-side coverage" } },
        { id: "m10", name: "Cthulhu Spawn", traits: { off: "Induces route amnesia in coverage", def: "Breaks quarterback mental focus" } },
        { id: "m11", name: "Indominus Rex", traits: { off: "Ruthless aggressive perimeter running", def: "Camo-skin camouflage edge rushing" } }
    ],
    marvel: [
        { id: "mar1", name: "Doctor Strange", traits: { off: "Opens sling-ring passing portals", def: "Bends temporal space to halt drives" } },
        { id: "mar2", name: "Juggernaut", traits: { off: "Unstoppable forward rushing momentum", def: "Demolishes oncoming lead blockers" } },
        { id: "mar3", name: "Spider-Man", traits: { off: "Flawless web-assisted catch radius", def: "Spider-Sense jump-ball breakups" } },
        { id: "mar4", name: "Nightcrawler", traits: { off: "Teleports past safety coverage", def: "Teleports to secure interception returns" } },
        { id: "mar5", name: "Thanos", traits: { off: "Power stone interior push dominance", def: "Crushing goal-line defensive tackle" } },
        { id: "mar6", name: "Captain America", traits: { off: "Elite standard backfield leadership", def: "Vibranium shield pass deflection" } },
        { id: "mar7", name: "Iron Man", traits: { off: "Thruster-boosted scramble speed", def: "Heads-up display target tracking" } },
        { id: "mar8", name: "Black Panther", traits: { off: "Kinetic energy absorption cuts", def: "Vibranium suit impact tackling" } },
        { id: "mar9", name: "Wolverine", traits: { off: "Aggressive stiff-arm yardage", def: "Relentless healing-factor stamina" } },
        { id: "mar10", name: "Scarlet Witch", traits: { off: "Hex-magic ball redirection", def: "Alters offensive line logic pathways" } },
        { id: "mar11", name: "Hulk", traits: { off: "Smashes through open-field groupings", def: "Leaps completely over pass protection" } }
    ],
    yugioh: [
        { id: "y2", name: "Blue-Eyes White Dragon", traits: { off: "Burst stream of rushing power", def: "Towering secondary coverage wall" } },
        { id: "y3", name: "Dark Magician", traits: { off: "Alters football vectors mid-air", def: "Magical trap cylinder deflections" } },
        { id: "y4", name: "Harpie Lady", traits: { off: "Hyper-velocity perimeter wing bursts", def: "Blinds wide receivers downfield" } },
        { id: "y5", name: "Exodia the Forbidden One", traits: { off: "Instant short-yardage conversions", def: "Locks down the entire backfield" } },
        { id: "y6", name: "Kuriboh", traits: { off: "Sips through tiny line variations", def: "Multiplies to absorb total tackle shock" } },
        { id: "y7", name: "Red-Eyes Black Dragon", traits: { off: "Fiery open-field acceleration", def: "Intimidating edge rush presence" } },
        { id: "y8", name: "Obelisk the Tormentor", traits: { off: "Crushing structural pass protection", def: "Shatters pockets with fist of fate" } },
        { id: "y9", name: "Slifer the Sky Dragon", traits: { off: "Sky-high downfield catch radius", def: "Deploys lightning to force drop fumbles" } },
        { id: "y10", name: "Time Wizard", traits: { off: "Bends the play clock backward", def: "Ages opposing players mid-play" } },
        { id: "y11", name: "Jinzo", traits: { off: "Disables opposing audible tech", def: "Completely nullifies trick-play traps" } }
    ],
    pokemon: [],
    starwars: [
        { id: "sw1", name: "Darth Vader", traits: { off: "Force-Grip clean pocket isolation", def: "Dark-side choke-hold pressure" } },
        { id: "sw2", name: "General Grievous", traits: { off: "Four-armed ball security armor", def: "Mechanical multi-angle tackler" } },
        { id: "sw3", name: "Luke Skywalker", traits: { off: "Precognitive Force route adjustments", def: "Mind-trick interception setup" } },
        { id: "sw4", name: "Boba Fett", traits: { off: "Jetpack-boosted red zone separation", def: "Target tracking downfield containment" } },
        { id: "sw5", name: "Chewbacca", traits: { off: "Brutal boundary edge blocking", def: "Wookiee rage bone-shattering stops" } },
        { id: "sw6", name: "Grand Admiral Thrawn", traits: { off: "Decodes formatting trends early", def: "Flawless defensive realignment coordination" } },
        { id: "sw7", name: "Han Solo", traits: { off: "Improvisational fast-draw playmaking", def: "Lucky deflection recoveries" } },
        { id: "sw8", name: "Emperor Palpatine", traits: { off: "Dark side spatial distortions", def: "Force lightning pocket disruption" } },
        { id: "sw9", name: "Kylo Ren", traits: { off: "Force-stasis block containment", def: "Aggressive perimeter tracking" } },
        { id: "sw10", name: "Rey Skywalker", traits: { off: "Natural flow-state route finding", def: "Agile acrobatic lock-down coverage" } },
        { id: "sw11", name: "Obi-Wan Kenobi", traits: { off: "Master of the higher passing trajectory", def: "Calm defensive stance run-stopping" } }
    ]
};

function createAdditionalPlayers(teamId, names, traits) {
    return names.map((name, index) => ({
        id: `${teamId}-extra-${index + 1}`,
        name,
        traits: {
            off: traits.off(name),
            def: traits.def(name)
        }
    }));
}

leagueDatabase.starwars.push(...createAdditionalPlayers('starwars', [
    'Yoda', 'Leia Organa', 'Lando Calrissian', 'Padmé Amidala', 'Mace Windu',
    'Qui-Gon Jinn', 'Ahsoka Tano', 'Anakin Skywalker', 'R2-D2', 'C-3PO', 'BB-8',
    'Finn', 'Poe Dameron', 'Jyn Erso', 'Cassian Andor', 'Din Djarin', 'Grogu',
    'Bo-Katan Kryze', 'Jabba the Hutt', 'Darth Maul', 'Count Dooku', 'Jango Fett',
    'K-2SO', 'Chirrut Îmwe', 'Wedge Antilles', 'Grand Moff Tarkin',
    'Asajj Ventress', 'Plo Koon', 'Ezra Bridger'
], {
    off: (name) => `${name} brings Star Wars skill and daring to the offense.`,
    def: (name) => `${name} uses Star Wars tactics to disrupt the opposing offense.`
}));

leagueDatabase.marvel.push(...createAdditionalPlayers('marvel', [
    'Thor', 'Black Widow', 'Hawkeye', 'Loki', 'Vision', 'Falcon',
    'Winter Soldier', 'Ant-Man', 'Wasp', 'Captain Marvel', 'Ms. Marvel',
    'She-Hulk', 'Daredevil', 'Jessica Jones', 'Luke Cage', 'Iron Fist',
    'The Punisher', 'Deadpool', 'Moon Knight', 'Storm', 'Cyclops', 'Jean Grey',
    'Professor X', 'Magneto', 'Venom', 'Green Goblin', 'Doctor Doom',
    'Silver Surfer', 'Ghost Rider'
], {
    off: (name) => `${name} brings Marvel-level power to the offense.`,
    def: (name) => `${name} uses extraordinary abilities to disrupt the offense.`
}));

leagueDatabase.pantheon.push(...createAdditionalPlayers('pantheon', [
    'Zeus', 'Hera', 'Poseidon', 'Demeter', 'Ares', 'Athena', 'Apollo', 'Artemis',
    'Hephaestus', 'Aphrodite', 'Hermes Trismegistus', 'Hestia', 'Dionysus', 'Hades',
    'Persephone', 'Prometheus', 'Epimetheus', 'Orpheus', 'Heracles', 'Perseus',
    'Theseus', 'Odysseus', 'Jason', 'Atalanta', 'Midas', 'Pythagoras', 'Gilgamesh',
    'Isis', 'Ra'
], {
    off: (name) => `${name} brings mythic power to the offense.`,
    def: (name) => `${name} commands a legendary defensive stand.`
}));

leagueDatabase.monsters.push(...createAdditionalPlayers('monsters', [
    'The Blob', 'The Fly', 'The Invisible Man', 'The Mummy', 'The Wolf Man',
    'Frankenstein’s Monster', 'The Creature from the Black Lagoon', 'The Pale Man',
    'The Babadook', 'The Headless Horseman', 'The Jersey Devil', 'Mothman',
    'The Chupacabra', 'The Yeti', 'The Wendigo', 'The Rancor', 'A Mynock Swarm',
    'The Sarlacc', 'A Krayt Dragon', 'The Zillo Beast', 'A Dianoga', 'A Wampa',
    'The Horta', 'A Tribble Swarm', 'The Gorn', 'A Space Slug', 'The Mutant Bear',
    'The White Spike', 'The Grabber'
], {
    off: (name) => `${name} overwhelms the defense with a monstrous advance.`,
    def: (name) => `${name} disrupts the offense with an alien ambush.`
}));

leagueDatabase.yugioh.push(...createAdditionalPlayers('yugioh', [
    'Summoned Skull', 'Celtic Guardian', 'Gaia the Fierce Knight',
    'Black Luster Soldier', 'Dark Magician Girl', 'Buster Blader', 'Baby Dragon',
    'Thousand Dragon', 'Relinquished', 'The Winged Dragon of Ra',
    'Winged Dragon, Guardian of the Fortress #1', 'Mammoth Graveyard',
    'Mystical Elf', 'Curse of Dragon', 'Sangan', 'Man-Eater Bug', 'Petit Dragon',
    'Feral Imp', 'Beaver Warrior', 'Rogue Doll', 'Giant Soldier of Stone',
    'Armored Lizard', 'Battle Ox', 'Koumori Dragon', 'Catapult Turtle',
    'Pumpking the King of Ghosts', 'Skull Servant', 'The Fiend Megacyber',
    'Garoozis', 'La Jinn the Mystical Genie of the Lamp'
], {
    off: (name) => `${name} launches a powerful monster attack.`,
    def: (name) => `${name} guards the field with a monster effect.`
}));

const originalPokemonNames = `
bulbasaur ivysaur venusaur charmander charmeleon charizard squirtle wartortle blastoise
caterpie metapod butterfree weedle kakuna beedrill pidgey pidgeotto pidgeot rattata raticate
spearow fearow ekans arbok pikachu raichu sandshrew sandslash nidoran-f nidorina nidoqueen
nidoran-m nidorino nidoking clefairy clefable vulpix ninetales jigglypuff wigglytuff zubat golbat
oddish gloom vileplume paras parasect venonat venomoth diglett dugtrio meowth persian psyduck golduck
mankey primeape growlithe arcanine poliwag poliwhirl poliwrath abra kadabra alakazam machop machoke machamp
bellsprout weepinbell victreebel tentacool tentacruel geodude graveler golem ponyta rapidash slowpoke slowbro
magnemite magneton farfetchd doduo dodrio seel dewgong grimer muk shellder cloyster gastly haunter gengar onix
drowzee hypno krabby kingler voltorb electrode exeggcute exeggutor cubone marowak hitmonlee hitmonchan lickitung
koffing weezing rhyhorn rhydon chansey tangela kangaskhan horsea seadra goldeen seaking staryu starmie mr-mime
scyther jynx electabuzz magmar pinsir tauros magikarp gyarados lapras ditto eevee vaporeon jolteon flareon porygon
omanyte omastar kabuto kabutops aerodactyl snorlax articuno zapdos moltres dratini dragonair dragonite mewtwo mew
`.trim().split(/\s+/);

function formatPokemonName(slug) {
    const specialNames = {
        'nidoran-f': 'Nidoran♀',
        'nidoran-m': 'Nidoran♂',
        farfetchd: "Farfetch'd",
        'mr-mime': 'Mr. Mime'
    };
    if (specialNames[slug]) {
        return specialNames[slug];
    }
    return slug.split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

leagueDatabase.pokemon = originalPokemonNames.map((slug, index) => {
    const name = formatPokemonName(slug);
    return {
        id: `pok${String(index + 1).padStart(3, '0')}`,
        name,
        traits: {
            off: `${name} uses a signature move to create an offensive opening.`,
            def: `${name} disrupts the play with a type-inspired defensive move.`
        }
    };
});


// Hidden ratings and the intended starters live in this closure only: never on player objects, never rendered.
const { getPositionFit, createRandomLineup, createOpponentLineup } = (() => {
// Intended starters by name, chosen from each character's lore. Their hidden ratings are shaped
// to excel at these positions; they are never used as default lineups.
const idealLineups = {
    pantheon: {
        offense: { QB: 'Alexander the Great', RB: 'Achilles', FB: 'Samson', WR1: 'Hermes', WR2: 'Loki', TE: 'Thor',
            LT: 'Atlas', LG: 'Heracles', C: 'Hephaestus', RG: 'Ares', RT: 'Poseidon' },
        defense: { DE1: 'Samson', DT1: 'Atlas', DT2: 'Heracles', DE2: 'Thor', OLB1: 'Achilles', MLB: 'King Arthur',
            OLB2: 'Ares', CB1: 'Post-Resurrection Jesus', CB2: 'Joan of Arc', FS: 'Medusa', SS: 'Odysseus' }
    },
    monsters: {
        offense: { QB: 'The Overmind', RB: 'Xenomorph Queen', FB: 'Godzilla', WR1: 'The Predator', WR2: 'The Demogorgon',
            TE: 'The Kraken', LT: 'A Sandworm', LG: 'Cloverfield Monster', C: 'The Blob', RG: 'The Rancor', RT: 'A Krayt Dragon' },
        defense: { DE1: 'Indominus Rex', DT1: 'Godzilla', DT2: 'Cloverfield Monster', DE2: 'A Sandworm', OLB1: 'The Kraken',
            MLB: 'The Thing', OLB2: 'The Wendigo', CB1: 'The Predator', CB2: 'The Demogorgon', FS: 'Cthulhu Spawn', SS: 'The Overmind' }
    },
    marvel: {
        offense: { QB: 'Doctor Strange', RB: 'Wolverine', FB: 'Juggernaut', WR1: 'Spider-Man', WR2: 'Nightcrawler',
            TE: 'Captain America', LT: 'Luke Cage', LG: 'Thanos', C: 'Hulk', RG: 'She-Hulk', RT: 'Thor' },
        defense: { DE1: 'Hulk', DT1: 'Thanos', DT2: 'She-Hulk', DE2: 'Venom', OLB1: 'Wolverine', MLB: 'Juggernaut',
            OLB2: 'The Punisher', CB1: 'Captain America', CB2: 'Black Panther', FS: 'Nightcrawler', SS: 'Iron Man' }
    },
    yugioh: {
        offense: { QB: 'Dark Magician', RB: 'Red-Eyes Black Dragon', FB: 'Battle Ox', WR1: 'Harpie Lady', WR2: 'Slifer the Sky Dragon',
            TE: 'Gaia the Fierce Knight', LT: 'Obelisk the Tormentor', LG: 'Giant Soldier of Stone', C: 'Exodia the Forbidden One',
            RG: 'Mammoth Graveyard', RT: 'Winged Dragon, Guardian of the Fortress #1' },
        defense: { DE1: 'Summoned Skull', DT1: 'Obelisk the Tormentor', DT2: 'Giant Soldier of Stone', DE2: 'Curse of Dragon',
            OLB1: 'Black Luster Soldier', MLB: 'Exodia the Forbidden One', OLB2: 'Buster Blader', CB1: 'Blue-Eyes White Dragon',
            CB2: 'Harpie Lady', FS: 'Time Wizard', SS: 'Jinzo' }
    },
    pokemon: {
        offense: { QB: 'Alakazam', RB: 'Arcanine', FB: 'Snorlax', WR1: 'Dodrio', WR2: 'Aerodactyl', TE: 'Machamp',
            LT: 'Onix', LG: 'Golem', C: 'Rhydon', RG: 'Kangaskhan', RT: 'Cloyster' },
        defense: { DE1: 'Pinsir', DT1: 'Snorlax', DT2: 'Rhydon', DE2: 'Scyther', OLB1: 'Gyarados', MLB: 'Machamp',
            OLB2: 'Dragonite', CB1: 'Rapidash', CB2: 'Pidgeot', FS: 'Zapdos', SS: 'Hitmonlee' }
    },
    starwars: {
        offense: { QB: 'Grand Admiral Thrawn', RB: 'Anakin Skywalker', FB: 'General Grievous', WR1: 'Rey Skywalker', WR2: 'Boba Fett',
            TE: 'Luke Skywalker', LT: 'Jabba the Hutt', LG: 'Darth Vader', C: 'K-2SO', RG: 'Kylo Ren', RT: 'Chewbacca' },
        defense: { DE1: 'Darth Vader', DT1: 'General Grievous', DT2: 'Chewbacca', DE2: 'Emperor Palpatine', OLB1: 'Mace Windu',
            MLB: 'Obi-Wan Kenobi', OLB2: 'Darth Maul', CB1: 'Rey Skywalker', CB2: 'Boba Fett', FS: 'Luke Skywalker', SS: 'Yoda' }
    }
};

function getIdealLineup(teamId, group) {
    const roster = leagueDatabase[teamId];
    return Object.fromEntries(Object.entries(idealLineups[teamId][group]).map(([position, name]) => {
        const player = roster.find((candidate) => candidate.name === name);
        if (!player) {
            throw new Error(`Ideal lineup: ${name} not found on ${teamId}`);
        }
        return [position, player.id];
    }));
}

    const attributes = ['thp', 'tha', 'spd', 'str', 'hands', 'blk', 'tkl', 'cov', 'pur', 'awr'];
    const archetypes = {
        thrower:  { thp: 85, tha: 85, spd: 55, str: 45, hands: 45, blk: 30, tkl: 30, cov: 35, pur: 30, awr: 85 },
        speedster:{ thp: 40, tha: 40, spd: 90, str: 45, hands: 85, blk: 30, tkl: 40, cov: 65, pur: 45, awr: 60 },
        bruiser:  { thp: 40, tha: 35, spd: 60, str: 90, hands: 50, blk: 55, tkl: 85, cov: 35, pur: 75, awr: 55 },
        lineman:  { thp: 25, tha: 25, spd: 35, str: 90, hands: 30, blk: 90, tkl: 65, cov: 20, pur: 55, awr: 60 },
        coverage: { thp: 35, tha: 35, spd: 80, str: 40, hands: 60, blk: 25, tkl: 55, cov: 90, pur: 40, awr: 80 },
        rusher:   { thp: 25, tha: 25, spd: 65, str: 75, hands: 35, blk: 40, tkl: 75, cov: 30, pur: 90, awr: 55 }
    };
    const playerRatingOverrides = {
        'p1:offense': { thp: 95, tha: 95, spd: 75, awr: 95 }
    };
    const positionWeights = {
        QB: { thp: .3, tha: .35, awr: .3, spd: .05 },
        RB: { spd: .35, str: .25, hands: .1, awr: .3 },
        FB: { str: .4, blk: .3, tkl: .1, awr: .2 },
        WR: { spd: .35, hands: .4, awr: .25 },
        TE: { hands: .3, blk: .3, str: .2, spd: .2 },
        LT: { blk: .6, str: .3, awr: .1 },
        LG: { blk: .6, str: .3, awr: .1 },
        C:  { blk: .5, str: .25, awr: .25 },
        RG: { blk: .6, str: .3, awr: .1 },
        RT: { blk: .6, str: .3, awr: .1 },
        DE: { pur: .4, str: .3, spd: .2, tkl: .1 },
        DT: { str: .45, pur: .3, tkl: .25 },
        OLB: { tkl: .35, spd: .25, pur: .2, cov: .2 },
        MLB: { tkl: .4, awr: .3, str: .15, cov: .15 },
        CB: { cov: .5, spd: .35, awr: .15 },
        FS: { cov: .4, awr: .3, spd: .2, tkl: .1 },
        SS: { tkl: .35, cov: .3, spd: .15, awr: .2 }
    };

    function hash(text) {
        let value = 2166136261;
        for (let i = 0; i < text.length; i++) {
            value = Math.imul(value ^ text.charCodeAt(i), 16777619);
        }
        return value >>> 0;
    }

    function seededRandom(seed) {
        let state = seed || 1;
        return () => {
            state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
            return state / 4294967296;
        };
    }

    const archetypeByCode = {
        T: 'thrower', S: 'speedster', B: 'bruiser', L: 'lineman', C: 'coverage', R: 'rusher'
    };
    // One code per player, in roster order (starters first, then extras).
    const archetypeCodes = {
        pantheon: 'CBSCLRLTCTT' + 'TCRLBCTSLS' + 'CLBRSTLCBS' + 'BTCSLTRCR',
        monsters: 'TBSCRBLLSCR' + 'LSCLRBCCTB' + 'SSRLRBSLRB' + 'CBLCBLRCR',
        marvel: 'TBSSLTSCRCB' + 'BSTCCSRSSR' + 'SBCBLBTRCT' + 'TCTLRSTSR',
        yugioh: 'BTSLCRLSTC' + 'RCBBTRSLLT' + 'LLCRSRSSBC' + 'LBBSTCCBBC',
        starwars: 'RBTSLTSRBCC' + 'CTTSBCSRLC' + 'SBSSCBCSLR' + 'TSLCSTRCC',
        pokemon: 'LLLSRRCCLC' + 'LTSLSSSSSB' + 'SSCRSSLBCC' + 'LRRBTTSTCL' + 'CRCCTCBCSS' +
            'SSSCTRBRBC' + 'CBTTTBBBCC' + 'RCCLLLSSLL' + 'CCTSSCCLLL' + 'LCCCLTTBBS' +
            'SCRBBSBCCL' + 'LLLCBCCCCS' + 'TCRTSRBBCR' + 'CTSCSRTLLL' + 'RSLCSRCCBTT'
    };
    // Depth players use their archetype scaled down; intended starters get an elite profile per position.
    const archetypeById = {};
    Object.entries(archetypeCodes).forEach(([teamId, codes]) => {
        leagueDatabase[teamId].forEach((player, index) => {
            archetypeById[player.id] = archetypes[archetypeByCode[codes[index]]];
        });
    });

    const starterProfiles = {};
    Object.keys(idealLineups).forEach((teamId) => {
        ['offense', 'defense'].forEach((group) => {
            Object.entries(getIdealLineup(teamId, group)).forEach(([position, playerId]) => {
                const weights = positionWeights[position.replace(/\d+$/, '')];
                const topWeight = Math.max(...Object.values(weights));
                const key = `${playerId}:${group}`;
                const profile = starterProfiles[key] || (starterProfiles[key] = {});
                attributes.forEach((attribute) => {
                    const value = weights[attribute] ? 70 + 27 * (weights[attribute] / topWeight) : 25;
                    profile[attribute] = Math.max(profile[attribute] || 0, value);
                });
            });
        });
    });

    // Offensive and defensive ratings are independent, matching each character's separate offense/defense traits.
    const cache = new Map();
    function getRatings(player, group) {
        const key = `${player.id}:${group}`;
        if (!cache.has(key)) {
            const random = seededRandom(hash(key));
            const profile = starterProfiles[key];
            const archetype = archetypeById[player.id] || archetypes.lineman;
            const overrides = playerRatingOverrides[key] || {};
            const ratings = {};
            attributes.forEach((attribute) => {
                const override = overrides[attribute];
                const base = override ?? (profile ? profile[attribute] : archetype[attribute] * 0.7);
                const jitter = override === undefined ? Math.round((random() - 0.5) * (profile ? 6 : 20)) : 0;
                ratings[attribute] = Math.max(1, Math.min(99, Math.round(base) + jitter));
            });
            cache.set(key, ratings);
        }
        return cache.get(key);
    }

    const defensiveSlots = /^(DE|DT|OLB|MLB|CB|FS|SS)/;
    function getPositionFit(player, position) {
        const weights = positionWeights[position.replace(/\d+$/, '')];
        const ratings = getRatings(player, defensiveSlots.test(position) ? 'defense' : 'offense');
        return Object.entries(weights).reduce((total, [attribute, weight]) => total + ratings[attribute] * weight, 0);
    }

    function shuffle(items) {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function createRandomLineup(teamId, positions) {
        const picks = shuffle(leagueDatabase[teamId]).slice(0, positions.length);
        return Object.fromEntries(positions.map((position, index) => [position, picks[index].id]));
    }

    // Opponents field their lore-based starters with the same few slots swapped for mediocre bench players,
    // so every opponent is about equally tough and the same every run.
    const WEAKENED_SLOTS = 4;
    const WEAKENED_FIT = 62;
    function createOpponentLineup(teamId, group) {
        const lineup = getIdealLineup(teamId, group);
        const random = seededRandom(hash(`opponent:${group}`));
        const positions = Object.keys(lineup);
        const bench = leagueDatabase[teamId].filter((player) => !Object.values(lineup).includes(player.id));
        for (let i = 0; i < WEAKENED_SLOTS; i++) {
            const position = positions.splice(Math.floor(random() * positions.length), 1)[0];
            const closest = bench.reduce((pick, player) =>
                Math.abs(getPositionFit(player, position) - WEAKENED_FIT) < Math.abs(getPositionFit(pick, position) - WEAKENED_FIT) ? player : pick);
            lineup[position] = closest.id;
            bench.splice(bench.indexOf(closest), 1);
        }
        return lineup;
    }

    return { getPositionFit, createRandomLineup, createOpponentLineup };
})();

const teams = [
    { id: 'pantheon', name: '🏛️ Olympus Immortals' },
    { id: 'monsters', name: '👾 Cosmic Horrors' },
    { id: 'yugioh', name: '🃏 Shadow Duelists' },
    { id: 'pokemon', name: '⚡ Pocket Monsters' },
    { id: 'marvel', name: '🦸 Mighty Guardians' },
    { id: 'starwars', name: '🌠 Galactic Rebels' }
];
const offensivePositions = [
    'QB', 'RB', 'FB', 'WR1', 'WR2', 'TE', 'LT', 'LG', 'C', 'RG', 'RT'
];
const defensivePositions = [
    'DE1', 'DT1', 'DT2', 'DE2', 'OLB1', 'MLB', 'OLB2', 'CB1', 'CB2', 'FS', 'SS'
];
const boxScoreCategories = [
    { id: 'overview', label: 'Overview' },
    { id: 'quarterbacks', label: 'Quarterbacks' },
    { id: 'running-backs', label: 'Running Backs' },
    { id: 'receivers', label: 'Receivers' },
    { id: 'defense', label: 'Defense' }
];
const lineupState = {
    home: { teamId: null, offense: {}, defense: {} },
    away: { teamId: null, offense: {}, defense: {} }
};
const activeDefense = { teamId: null, players: [] };
let recapExpanded = false;

const team1Select = document.getElementById('team1-select');
const team2Select = document.getElementById('team2-select');

function getTeam(teamId) {
    return teams.find((team) => team.id === teamId);
}

function getPeriodLabel(period) {
    return period <= 4 ? `Q${period}` : `OT${period - 4}`;
}

function createPlayerStats(player) {
    return {
        id: player.id,
        name: player.name,
        passAtt: 0,
        completions: 0,
        passYards: 0,
        passTD: 0,
        interceptionsThrown: 0,
        rushAtt: 0,
        rushYards: 0,
        rushTD: 0,
        receptions: 0,
        receivingYards: 0,
        receivingTD: 0,
        tackles: 0,
        sacks: 0,
        interceptions: 0,
        forcedFumbles: 0
    };
}

function createTeamStats(teamId) {
    return {
        teamId,
        quarterScores: [0, 0, 0, 0],
        passingYards: 0,
        rushingYards: 0,
        firstDowns: 0,
        turnovers: 0,
        touchdowns: 0,
        fieldGoals: 0,
        players: Object.fromEntries(leagueDatabase[teamId].map((player) => [
            player.id,
            createPlayerStats(player)
        ]))
    };
}

function populateTeamSelect(select, selectedId, opponentId) {
    select.replaceChildren(...teams
        .filter((team) => team.id !== opponentId)
        .map((team) => {
            const option = document.createElement('option');
            option.value = team.id;
            option.textContent = team.name;
            option.selected = team.id === selectedId;
            return option;
        }));
}

function renderLineupUnit(slot, teamId) {
    const state = lineupState[slot];
    const roster = leagueDatabase[teamId];
    const root = document.getElementById(`${slot}-lineup`);
    const reset = state.teamId !== teamId;
    state.teamId = teamId;

    if (reset || root.childElementCount === 0) {
        state.offense = createRandomLineup(teamId, offensivePositions);
        state.defense = createRandomLineup(teamId, defensivePositions);
        root.replaceChildren();

        const heading = document.createElement('h4');
        heading.textContent = getTeam(teamId).name;
        root.append(heading);

        const offenseDetails = document.createElement('details');
        offenseDetails.className = 'lineup-section';
        offenseDetails.open = true;
        const offenseSummary = document.createElement('summary');
        offenseSummary.textContent = 'Offense';
        offenseDetails.append(offenseSummary);
        const offenseGrid = document.createElement('div');
        offenseGrid.className = 'lineup-grid';
        offenseGrid.id = `${slot}-offense-lineup`;
        offenseDetails.append(offenseGrid);
        root.append(offenseDetails);

        const defenseDetails = document.createElement('details');
        defenseDetails.className = 'lineup-section';
        const defenseSummary = document.createElement('summary');
        defenseSummary.textContent = 'Defense (4-3)';
        defenseDetails.append(defenseSummary);
        const defenseGrid = document.createElement('div');
        defenseGrid.className = 'lineup-grid';
        defenseGrid.id = `${slot}-defense-lineup`;
        defenseDetails.append(defenseGrid);
        root.append(defenseDetails);

        [
            [offensivePositions, state.offense, offenseGrid, 'offense'],
            [defensivePositions, state.defense, defenseGrid, 'defense']
        ].forEach(([positions, selected, grid, group]) => {
            positions.forEach((position) => {
                const label = document.createElement('label');
                label.className = 'lineup-slot';
                const positionLabel = document.createElement('span');
                positionLabel.textContent = position;
                const select = document.createElement('select');
                select.id = `${slot}-${group}-${position.toLowerCase()}`;
                select.setAttribute('aria-label', `${getTeam(teamId).name} ${position}`);
                select.addEventListener('change', () => {
                    const previousPlayerId = selected[position];
                    const displacedPosition = positions.find((otherPosition) =>
                        otherPosition !== position &&
                        selected[otherPosition] === select.value
                    );
                    if (displacedPosition) {
                        selected[displacedPosition] = previousPlayerId;
                    }
                    selected[position] = select.value;
                    renderLineupUnit(slot, teamId);
                });
                label.append(positionLabel, select);
                grid.append(label);
            });
        });
    }

    [
        [offensivePositions, state.offense, 'offense'],
        [defensivePositions, state.defense, 'defense']
    ].forEach(([positions, selected, group]) => {
        positions.forEach((position) => {
            const select = document.getElementById(
                `${slot}-${group}-${position.toLowerCase()}`
            );
            const selectedId = selected[position];
            select.replaceChildren(...roster.map((player) => {
                const option = document.createElement('option');
                option.value = player.id;
                option.textContent = player.name;
                option.selected = player.id === selectedId;
                return option;
            }));
        });
    });
    document.getElementById('share-btn').hidden = true;
}

let shareText = '';

function getShareLink() {
    const home = lineupState.home;
    const ids = (positions, group) => positions.map((position) => home[group][position]).join(',');
    return `${location.href.split('#')[0]}#t=${home.teamId}&o=${ids(offensivePositions, 'offense')}&d=${ids(defensivePositions, 'defense')}`;
}

function setShareText(headline) {
    shareText = ['🌌 Cosmic Gridiron', headline, 'Can you find the perfect lineup?', getShareLink()].join('\n');
    document.getElementById('share-btn').hidden = false;
}

document.getElementById('share-btn').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    try {
        await navigator.clipboard.writeText(shareText);
    } catch {
        const field = document.createElement('textarea');
        field.value = shareText;
        document.body.append(field);
        field.select();
        document.execCommand('copy');
        field.remove();
    }
    button.textContent = '✅ Copied!';
    setTimeout(() => { button.textContent = '📋 Copy Result'; }, 1500);
});

// Opening a shared link restores that home lineup.
function applyLineupFromHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    const teamId = params.get('t');
    if (!getTeam(teamId)) return;
    const roster = leagueDatabase[teamId];
    const parse = (key, positions) => {
        const ids = (params.get(key) || '').split(',');
        const valid = ids.length === positions.length &&
            new Set(ids).size === ids.length &&
            ids.every((id) => roster.some((player) => player.id === id));
        return valid ? Object.fromEntries(positions.map((position, index) => [position, ids[index]])) : null;
    };
    const awayId = team2Select.value === teamId ? teams.find((team) => team.id !== teamId).id : team2Select.value;
    populateTeamSelect(team1Select, teamId, awayId);
    populateTeamSelect(team2Select, awayId, teamId);
    updateMatchup();
    const offense = parse('o', offensivePositions);
    const defense = parse('d', defensivePositions);
    if (offense) lineupState.home.offense = offense;
    if (defense) lineupState.home.defense = defense;
    renderLineupUnit('home', teamId);
}

// Season view hides the away side, since each season game uses a different opponent.
function setSeasonView(on) {
    document.body.classList.toggle('season-view', on);
    document.getElementById('home-label').textContent = on ? 'YOUR TEAM' : 'HOME';
}

function updateMatchup() {
    const homeTeamId = team1Select.value || teams[0].id;
    const awayTeamId = team2Select.value || teams[1].id;
    populateTeamSelect(team1Select, homeTeamId, awayTeamId);
    populateTeamSelect(team2Select, awayTeamId, homeTeamId);
    renderLineupUnit('home', homeTeamId);
    renderLineupUnit('away', awayTeamId);
    document.getElementById('box-score').hidden = true;
    document.getElementById('team1-score').textContent = '0';
    document.getElementById('team2-score').textContent = '0';
    document.getElementById('box-score-content').replaceChildren();
    document.getElementById('box-score-tabs').replaceChildren();
    document.getElementById('new-matchup-btn').hidden = true;
    document.getElementById('sim-btn').textContent = '🏈 Simulate Full Game';
    document.getElementById('recap-count').textContent = 'Not started';
    document.getElementById('recap-toggle').hidden = true;
    recapExpanded = false;
    document.getElementById('play-log').innerHTML =
        '<p class="empty-state">Choose your lineups, then simulate the full game.</p>';
}

team1Select.value = teams[0].id;
team2Select.value = teams[1].id;
team1Select.addEventListener('change', updateMatchup);
team2Select.addEventListener('change', updateMatchup);
updateMatchup();
applyLineupFromHash();

function getSelectedPlayer(slot, group, position) {
    const teamId = lineupState[slot].teamId;
    const playerId = lineupState[slot][group][position];
    return leagueDatabase[teamId].find((player) => player.id === playerId);
}

function getDefenders(slot) {
    const teamId = lineupState[slot].teamId;
    activeDefense.teamId = teamId;
    activeDefense.players = defensivePositions.map((position) => ({
        ...getSelectedPlayer(slot, 'defense', position),
        position
    }));
    return activeDefense.players;
}

// Fit differences saturate so bad lineups still score a little, while small gaps near the top still matter.
const EDGE_SCALE = 3;
const DRIVES_PER_QUARTER = 6;
const PLAYS_PER_DRIVE = 9;
const WEAKEST_LINK = 0.7;
const EDGE_CAP = 25;
const shape = (edge) => EDGE_CAP * Math.tanh((edge * EDGE_SCALE) / EDGE_CAP);

function averageFit(slot, group, positions) {
    const fits = positions.map((position) =>
        getPositionFit(getSelectedPlayer(slot, group, position), position));
    const average = fits.reduce((sum, fit) => sum + fit, 0) / fits.length;
    // A unit is only as good as its weakest member, so one misplaced player drags the whole group down.
    return average * (1 - WEAKEST_LINK) + Math.min(...fits) * WEAKEST_LINK;
}

function simulateDrive(offenseSlot, quarter, offenseStats, defenseStats, recap) {
    const defenseSlot = offenseSlot === 'home' ? 'away' : 'home';
    const offenseTeamId = lineupState[offenseSlot].teamId;
    const defenseTeamId = lineupState[defenseSlot].teamId;
    const offense = offenseStats[offenseSlot];
    const defense = defenseStats[defenseSlot];
    const defenders = getDefenders(defenseSlot);
    let yardsFromStart = 0;
    let yardsToFirstDown = 10;
    let down = 1;
    const lineFit = averageFit(offenseSlot, 'offense', ['LT', 'LG', 'C', 'RG', 'RT']);
    const passRushFit = averageFit(defenseSlot, 'defense', ['DE1', 'DE2', 'OLB1', 'OLB2']);
    const coverageFit = averageFit(defenseSlot, 'defense', ['CB1', 'CB2', 'FS', 'SS']);
    const runStopFit = averageFit(defenseSlot, 'defense', ['DT1', 'DT2', 'MLB', 'OLB1', 'OLB2']);
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    for (let play = 0; play < PLAYS_PER_DRIVE; play++) {
        const isPass = Math.random() < 0.58;
        const defender = defenders[Math.floor(Math.random() * defenders.length)];
        const defenderStats = defense.players[defender.id];
        defenderStats.tackles++;

        if (isPass) {
            const quarterback = getSelectedPlayer(offenseSlot, 'offense', 'QB');
            const quarterbackStats = offense.players[quarterback.id];
            const receiverPosition = ['WR1', 'WR2', 'TE'][Math.floor(Math.random() * 3)];
            const receiver = getSelectedPlayer(offenseSlot, 'offense', receiverPosition);
            const receiverStats = offense.players[receiver.id];
            quarterbackStats.passAtt++;
            const quarterbackFit = getPositionFit(quarterback, 'QB');
            const receiverFit = getPositionFit(receiver, receiverPosition);
            const passEdge = shape((quarterbackFit + receiverFit) / 2 - coverageFit);
            const protectionEdge = shape(lineFit - passRushFit);

            if (Math.random() < clamp(0.045 - shape(quarterbackFit - 60) * 0.0005 - passEdge * 0.0003, 0.01, 0.1)) {
                quarterbackStats.interceptionsThrown++;
                defenderStats.interceptions++;
                offense.turnovers++;
                recap.push(`${getTeam(offenseTeamId).name}: ${defender.name} intercepts ${quarterback.name}.`);
                return;
            }

            if (Math.random() < clamp(0.055 - protectionEdge * 0.001, 0.01, 0.15)) {
                defenderStats.sacks++;
                recap.push(`${getTeam(defenseTeamId).name}: ${defender.name} sacks ${quarterback.name}.`);
            } else if (Math.random() < clamp(0.64 + passEdge * 0.004, 0.3, 0.85)) {
                const gain = Math.max(1, Math.floor(Math.random() * 27) + 4 + Math.round(shape(receiverFit - 60) / 10));
                quarterbackStats.completions++;
                quarterbackStats.passYards += gain;
                receiverStats.receptions++;
                receiverStats.receivingYards += gain;
                offense.passingYards += gain;
                yardsFromStart += gain;
                yardsToFirstDown -= gain;

                if (yardsFromStart >= 75) {
                    quarterbackStats.passTD++;
                    receiverStats.receivingTD++;
                    offense.touchdowns++;
                    offense.quarterScores[quarter - 1] += 7;
                    recap.push(`${getPeriodLabel(quarter)} TOUCHDOWN: ${receiver.name} catches a ${gain}-yard score from ${quarterback.name}.`);
                    return;
                }
            }
        } else {
            const runner = getSelectedPlayer(offenseSlot, 'offense', 'RB');
            const runnerStats = offense.players[runner.id];
            runnerStats.rushAtt++;
            const runEdge = shape((getPositionFit(runner, 'RB') + lineFit) / 2 - runStopFit);
            const gain = Math.floor(Math.random() * 16) - 2 + Math.round(runEdge / 10);
            runnerStats.rushYards += gain;
            offense.rushingYards += gain;
            yardsFromStart += gain;
            yardsToFirstDown -= gain;

            if (yardsFromStart >= 75) {
                runnerStats.rushTD++;
                offense.touchdowns++;
                offense.quarterScores[quarter - 1] += 7;
                recap.push(`${getPeriodLabel(quarter)} TOUCHDOWN: ${runner.name} breaks free for a ${gain}-yard score.`);
                return;
            }
        }

        if (Math.random() < 0.015) {
            defenderStats.forcedFumbles++;
            offense.turnovers++;
            recap.push(`${getPeriodLabel(quarter)}: ${defender.name} forces a fumble for ${getTeam(defenseTeamId).name}.`);
            return;
        }

        if (yardsToFirstDown <= 0) {
            offense.firstDowns++;
            yardsToFirstDown = 10;
            down = 1;
        } else if (down === 4) {
            if (yardsFromStart >= 55 && Math.random() < 0.65) {
                offense.fieldGoals++;
                offense.quarterScores[quarter - 1] += 3;
                recap.push(`${getPeriodLabel(quarter)}: ${getTeam(offenseTeamId).name} kicks a field goal.`);
            } else {
                offense.turnovers++;
                recap.push(`${getPeriodLabel(quarter)}: ${getTeam(defenseTeamId).name} stops ${getTeam(offenseTeamId).name} on downs.`);
            }
            return;
        } else {
            down++;
        }
    }

    offense.turnovers++;
    recap.push(`${getPeriodLabel(quarter)}: ${getTeam(defenseTeamId).name} ends ${getTeam(offenseTeamId).name}'s extended possession.`);
}

function addTable(parent, title, headers, rows) {
    const heading = document.createElement('h3');
    heading.textContent = title;
    parent.append(heading);

    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach((header) => {
        const cell = document.createElement('th');
        cell.textContent = header;
        headerRow.append(cell);
    });
    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement('tbody');
    rows.forEach((row) => {
        const tableRow = document.createElement('tr');
        row.forEach((value) => {
            const cell = document.createElement('td');
            cell.textContent = value;
            tableRow.append(cell);
        });
        tbody.append(tableRow);
    });
    table.append(tbody);
    wrapper.append(table);
    parent.append(wrapper);
}

function renderBoxScore(statsBySlot) {
    const tabs = document.getElementById('box-score-tabs');
    const boxScoreContent = document.getElementById('box-score-content');
    tabs.replaceChildren();
    boxScoreContent.replaceChildren();
    const slots = ['home', 'away'];
    const totalPoints = (stats) => stats.quarterScores.reduce((total, points) => total + points, 0);
    const periodCount = Math.max(...slots.map((slot) => statsBySlot[slot].quarterScores.length));
    const periodHeaders = Array.from({ length: periodCount }, (_, index) =>
        index < 4 ? `Q${index + 1}` : `OT${index - 3}`
    );

    boxScoreCategories.forEach(({ id, label }, index) => {
        const tab = document.createElement('button');
        tab.className = 'box-score-tab';
        tab.id = `box-score-tab-${id}`;
        tab.type = 'button';
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-controls', `box-score-panel-${id}`);
        tab.setAttribute('aria-selected', String(index === 0));
        tab.tabIndex = index === 0 ? 0 : -1;
        tab.textContent = label;
        tabs.append(tab);

        const panel = document.createElement('section');
        panel.className = 'box-score-panel';
        panel.id = `box-score-panel-${id}`;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', tab.id);
        panel.hidden = index !== 0;
        boxScoreContent.append(panel);

        tab.addEventListener('click', () => {
            boxScoreCategories.forEach((category) => {
                const isActive = category.id === id;
                const categoryTab = document.getElementById(`box-score-tab-${category.id}`);
                document.getElementById(`box-score-panel-${category.id}`).hidden = !isActive;
                categoryTab.setAttribute('aria-selected', String(isActive));
                categoryTab.tabIndex = isActive ? 0 : -1;
            });
        });
        tab.addEventListener('keydown', (event) => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
                return;
            }
            event.preventDefault();
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (index + direction + boxScoreCategories.length) %
                boxScoreCategories.length;
            const nextTab = document.getElementById(
                `box-score-tab-${boxScoreCategories[nextIndex].id}`
            );
            nextTab.focus();
            nextTab.click();
        });
    });

    const overviewPanel = document.getElementById('box-score-panel-overview');
    addTable(overviewPanel, 'Score by Quarter',
        ['Team', ...periodHeaders, 'Total'],
        slots.map((slot) => {
            const stats = statsBySlot[slot];
            return [
                getTeam(stats.teamId).name,
                ...periodHeaders.map((_, index) => stats.quarterScores[index] || 0),
                totalPoints(stats)
            ];
        }));

    addTable(overviewPanel, 'Team Totals',
        ['Team', 'Points', 'Total Yards', 'Pass Yards', 'Rush Yards', 'First Downs', 'Turnovers', 'TD', 'FG'],
        slots.map((slot) => {
            const stats = statsBySlot[slot];
            return [
                getTeam(stats.teamId).name,
                totalPoints(stats),
                stats.passingYards + stats.rushingYards,
                stats.passingYards,
                stats.rushingYards,
                stats.firstDowns,
                stats.turnovers,
                stats.touchdowns,
                stats.fieldGoals
            ];
        }));

    addTable(document.getElementById('box-score-panel-quarterbacks'), 'Quarterback Stats',
        ['Team', 'Quarterback', 'Pass C/A', 'Pass Yds', 'Pass TD', 'INT'],
        slots.flatMap((slot) => Object.values(statsBySlot[slot].players)
            .filter((player) => player.passAtt > 0)
            .map((player) => [
                getTeam(statsBySlot[slot].teamId).name,
                player.name,
                `${player.completions}/${player.passAtt}`,
                player.passYards,
                player.passTD,
                player.interceptionsThrown
            ])));

    addTable(document.getElementById('box-score-panel-running-backs'), 'Running Back Stats',
        ['Team', 'Running Back', 'Carries', 'Rush Yds', 'Rush TD'],
        slots.flatMap((slot) => Object.values(statsBySlot[slot].players)
            .filter((player) => player.rushAtt > 0)
            .map((player) => [
                getTeam(statsBySlot[slot].teamId).name,
                player.name,
                player.rushAtt,
                player.rushYards,
                player.rushTD
            ])));

    addTable(document.getElementById('box-score-panel-receivers'), 'Receiving Stats',
        ['Team', 'Player', 'Position', 'Receptions', 'Rec Yds', 'Rec TD'],
        slots.flatMap((slot) => ['WR1', 'WR2', 'TE']
            .map((position) => {
                const player = getSelectedPlayer(slot, 'offense', position);
                return { position, player, stats: statsBySlot[slot].players[player.id] };
            })
            .filter(({ stats }) => stats.receptions > 0)
            .map(({ position, player, stats }) => [
                getTeam(statsBySlot[slot].teamId).name,
                player.name,
                position,
                stats.receptions,
                stats.receivingYards,
                stats.receivingTD
            ])));

    addTable(document.getElementById('box-score-panel-defense'), 'Defensive Player Stats',
        ['Team', 'Player', 'Position', 'Tackles', 'Sacks', 'INT', 'Forced Fumbles'],
        slots.flatMap((slot) => defensivePositions
            .map((position) => {
                const player = getSelectedPlayer(slot, 'defense', position);
                return {
                    position,
                    player,
                    stats: statsBySlot[slot].players[player.id]
                };
            })
            .filter(({ stats }) =>
                stats.tackles > 0 ||
                stats.sacks > 0 ||
                stats.interceptions > 0 ||
                stats.forcedFumbles > 0
            )
            .map(({ position, player, stats }) => [
                getTeam(statsBySlot[slot].teamId).name,
                player.name,
                position,
                stats.tackles,
                stats.sacks,
                stats.interceptions,
                stats.forcedFumbles
            ])));

    document.getElementById('box-score').hidden = false;
}

function renderGameRecap(recap) {
    const playLog = document.getElementById('play-log');
    const recapToggle = document.getElementById('recap-toggle');
    const playEntries = recap.filter((line) =>
        !line.startsWith('End of Q') &&
        !line.startsWith('End of OT') &&
        !line.startsWith('FINAL:')
    );
    const visibleStart = recapExpanded ? 0 : Math.max(0, playEntries.length - 5);
    let playIndex = 0;
    let period = 1;
    let quarterList;

    playLog.replaceChildren();
    recap.forEach((line) => {
        if (line.startsWith('End of Q') || line.startsWith('End of OT')) {
            period++;
            quarterList = null;
            return;
        }
        if (line.startsWith('FINAL:')) {
            const summary = document.createElement('p');
            summary.className = 'recap-final';
            summary.textContent = line;
            playLog.append(summary);
            return;
        }

        if (!quarterList) {
            const quarterSection = document.createElement('section');
            quarterSection.className = 'recap-quarter';
            const heading = document.createElement('h3');
            heading.textContent = period <= 4 ? `Quarter ${period}` : `Overtime ${period - 4}`;
            quarterSection.append(heading);
            quarterList = document.createElement('ol');
            quarterSection.append(quarterList);
            playLog.append(quarterSection);
        }

        const entry = document.createElement('li');
        entry.className = 'recap-play';
        if (line.includes('TOUCHDOWN')) {
            entry.classList.add('recap-touchdown');
        } else if (line.includes('intercept') || line.includes('fumble') || line.includes('on downs')) {
            entry.classList.add('recap-turnover');
        } else if (line.includes('field goal')) {
            entry.classList.add('recap-score');
        }
        entry.textContent = line;
        entry.hidden = playIndex < visibleStart;
        quarterList.append(entry);
        playIndex++;
    });

    document.getElementById('recap-count').textContent =
        `${playEntries.length} ${playEntries.length === 1 ? 'play' : 'plays'}`;
    recapToggle.hidden = playEntries.length <= 5;
    recapToggle.textContent = recapExpanded ? 'Show recent plays' : 'Show full recap';
    recapToggle.setAttribute('aria-expanded', String(recapExpanded));

    playLog.querySelectorAll('.recap-quarter').forEach((section) => {
        section.hidden = [...section.querySelectorAll('.recap-play')].every((play) => play.hidden);
    });
}

document.getElementById('recap-toggle').addEventListener('click', () => {
    recapExpanded = !recapExpanded;
    const plays = [...document.querySelectorAll('#play-log .recap-play')];
    const visibleStart = recapExpanded ? 0 : Math.max(0, plays.length - 5);
    plays.forEach((play, index) => {
        play.hidden = index < visibleStart;
    });
    document.querySelectorAll('#play-log .recap-quarter').forEach((section) => {
        section.hidden = [...section.querySelectorAll('.recap-play')].every((play) => play.hidden);
    });
    const button = document.getElementById('recap-toggle');
    button.textContent = recapExpanded ? 'Show recent plays' : 'Show full recap';
    button.setAttribute('aria-expanded', String(recapExpanded));
});

document.getElementById('new-matchup-btn').addEventListener('click', () => {
    setSeasonView(false);
    document.getElementById('share-btn').hidden = true;
    document.getElementById('team1-score').textContent = '0';
    document.getElementById('team2-score').textContent = '0';
    document.getElementById('box-score').hidden = true;
    document.getElementById('box-score-content').replaceChildren();
    document.getElementById('box-score-tabs').replaceChildren();
    document.getElementById('play-log').innerHTML =
        '<p class="empty-state">Choose your lineups, then simulate the full game.</p>';
    document.getElementById('recap-count').textContent = 'Not started';
    document.getElementById('recap-toggle').hidden = true;
    document.getElementById('new-matchup-btn').hidden = true;
    const simulateButton = document.getElementById('sim-btn');
    simulateButton.textContent = '🏈 Simulate Full Game';
    simulateButton.disabled = false;
});

function simulateGame() {
    const statsBySlot = {
        home: createTeamStats(lineupState.home.teamId),
        away: createTeamStats(lineupState.away.teamId)
    };
    const recap = [];

    for (let quarter = 1; quarter <= 4; quarter++) {
        for (let drive = 0; drive < DRIVES_PER_QUARTER; drive++) {
            const offenseSlot = drive % 2 === 0 ? 'home' : 'away';
            simulateDrive(offenseSlot, quarter, statsBySlot, statsBySlot, recap);
        }
        recap.push(`End of Q${quarter}: ${getTeam(lineupState.home.teamId).name} ${statsBySlot.home.quarterScores.slice(0, quarter).reduce((sum, score) => sum + score, 0)} - ${statsBySlot.away.quarterScores.slice(0, quarter).reduce((sum, score) => sum + score, 0)} ${getTeam(lineupState.away.teamId).name}`);
    }

    const totalScore = (slot) => statsBySlot[slot].quarterScores.reduce((total, points) => total + points, 0);
    let homeScore = totalScore('home');
    let awayScore = totalScore('away');
    let overtime = 0;

    while (homeScore === awayScore && overtime < 4) {
        overtime++;
        const period = 4 + overtime;
        statsBySlot.home.quarterScores.push(0);
        statsBySlot.away.quarterScores.push(0);

        for (const offenseSlot of ['home', 'away']) {
            simulateDrive(offenseSlot, period, statsBySlot, statsBySlot, recap);
        }

        homeScore = totalScore('home');
        awayScore = totalScore('away');
        if (homeScore !== awayScore || overtime < 4) {
            recap.push(`End of OT${overtime}: ${getTeam(lineupState.home.teamId).name} ${homeScore} - ${awayScore} ${getTeam(lineupState.away.teamId).name}`);
        }
    }

    if (homeScore === awayScore) {
        const winnerSlot = Math.random() < 0.5 ? 'home' : 'away';
        statsBySlot[winnerSlot].quarterScores[statsBySlot[winnerSlot].quarterScores.length - 1] += 3;
        statsBySlot[winnerSlot].fieldGoals++;
        homeScore = totalScore('home');
        awayScore = totalScore('away');
        recap.push(`OT${overtime}: Sudden-death field goal gives ${getTeam(lineupState[winnerSlot].teamId).name} the win.`);
        recap.push(`End of OT${overtime}: ${getTeam(lineupState.home.teamId).name} ${homeScore} - ${awayScore} ${getTeam(lineupState.away.teamId).name}`);
    }

    const result = `${getTeam(homeScore > awayScore ? lineupState.home.teamId : lineupState.away.teamId).name} wins!`;
    recap.push(`FINAL: ${getTeam(lineupState.home.teamId).name} ${homeScore} - ${awayScore} ${getTeam(lineupState.away.teamId).name}. ${result}`);

    return { statsBySlot, recap, homeScore, awayScore };
}

function setSimulationLocked(locked) {
    team1Select.disabled = locked;
    team2Select.disabled = locked;
    document.querySelectorAll('.team-lineup select').forEach((select) => {
        select.disabled = locked;
    });
    document.getElementById('sim-btn').disabled = locked;
    document.getElementById('season-btn').disabled = locked;
}

document.getElementById('sim-btn').addEventListener('click', (event) => {
    const simulateButton = event.currentTarget;
    setSeasonView(false);
    setSimulationLocked(true);
    simulateButton.textContent = 'Simulating…';
    recapExpanded = false;

    setTimeout(() => {
        const { statsBySlot, recap, homeScore, awayScore } = simulateGame();
        renderGameRecap(recap);
        renderGameRecap(recap);
        const homeName = getTeam(lineupState.home.teamId).name;
        const awayName = getTeam(lineupState.away.teamId).name;
        setShareText(`${homeName} ${homeScore} – ${awayScore} ${awayName} ${homeScore > awayScore ? '✅' : '❌'}`);
        document.getElementById('team2-score').textContent = awayScore;
        setSimulationLocked(false);
        simulateButton.textContent = '🏈 Simulate Again';
        document.getElementById('new-matchup-btn').hidden = false;
        renderBoxScore(statsBySlot);
    }, 200);
});

document.getElementById('season-btn').addEventListener('click', () => {
    const seasonButton = document.getElementById('season-btn');
    setSeasonView(true);
    setSimulationLocked(true);
    seasonButton.textContent = 'Simulating season…';

    setTimeout(() => {
        const homeName = getTeam(lineupState.home.teamId).name;
        const opponents = teams.filter((team) => team.id !== lineupState.home.teamId);
        const savedAway = { ...lineupState.away };
        const games = [];

        // 17 games over 5 opponents: each plays 3 or 4 times, in a shuffled order.
        const schedule = Array.from({ length: 17 }, (_, index) => opponents[index % opponents.length]);
        for (let i = schedule.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [schedule[i], schedule[j]] = [schedule[j], schedule[i]];
        }

        schedule.forEach((opponent, index) => {
            lineupState.away = {
                teamId: opponent.id,
                offense: createOpponentLineup(opponent.id, 'offense'),
                defense: createOpponentLineup(opponent.id, 'defense')
            };
            const { homeScore, awayScore } = simulateGame();
            games.push({ game: index + 1, opponent: opponent.name, homeScore, awayScore });
        });
        lineupState.away = savedAway;

        const wins = games.filter((g) => g.homeScore > g.awayScore).length;
        const losses = games.length - wins;
        const pointsFor = games.reduce((sum, g) => sum + g.homeScore, 0);
        const pointsAgainst = games.reduce((sum, g) => sum + g.awayScore, 0);

        const playLog = document.getElementById('play-log');
        playLog.replaceChildren();
        const summary = document.createElement('p');
        summary.className = 'recap-final';
        summary.textContent = `${homeName} finish ${wins}-${losses} (${pointsFor} PF, ${pointsAgainst} PA).`;
        playLog.append(summary);
        addTable(playLog, 'Season Results', ['Game', 'Opponent', 'Score', 'Result'],
            games.map((g) => [g.game, g.opponent, `${g.homeScore}-${g.awayScore}`, g.homeScore > g.awayScore ? 'W' : 'L']));

        document.getElementById('recap-count').textContent = `Season: ${wins}-${losses}`;
        document.getElementById('recap-toggle').hidden = true;
        document.getElementById('box-score').hidden = true;
        document.getElementById('team1-score').textContent = `${wins}-${losses}`;
        document.getElementById('team2-score').textContent = '–';
        setShareText(`${homeName} went ${wins}-${losses} (${pointsFor} PF, ${pointsAgainst} PA)${losses === 0 ? ' 🏆 PERFECT SEASON' : ''}`);
        document.getElementById('new-matchup-btn').hidden = false;
        setSimulationLocked(false);
        seasonButton.textContent = '📅 Simulate 17-Game Season';
    }, 200);
});
