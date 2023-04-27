#!/usr/bin/env node

import minimist from "minimist";


args = minimist(process.argv.slice(2))

const help_text = 'Usage: node-rpsls [SHOT] \n\
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)! \
\n \
  -h, --help        display this help message and exit \
  -r, --rules       display the rules and exit \
\n \
Examples: \
  node-rpsls        Return JSON with single player RPSLS result. \
                    e.g. {"player":"rock"} \
  node-rpls rock   Return JSON with results for RPSLS played against a simulated opponent. \
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}'

const rules_text = 'Rules for the Lizard-Spock Expansion of Rock Paper Scissors: \
\n \
- Scissors CUTS Paper \
- Paper COVERS Rock \
- Rock SMOOSHES Lizard \
- Lizard POISONS Spock \
- Spock SMASHES Scissors \
- Scissors DECAPITATES Lizard \
- Lizard EATS Paper \
- Paper DISPROVES Spock \
- Spock VAPORIZES Rock \
- Rock CRUSHES Scissors'



if (args.h || args.help) {
    console.log(help_text)
}

if (args.r || args.rules) {
    console.log(rules_text)
}


export function RPSLS(playerShot = null){
    const choices = [
        "Lizard",
        "Paper",
        "Rock",
        "Scissor",
        "Spock"
    ]

    const choice_rules = {
        Lizard: ['Spock', 'Paper'],
        Paper: ['Rock', 'Spock'],
        Rock: ['Lizard', 'Scissor'],
        Scissor: ['Paper', 'Lizard'],
        Spock: ['Scissor', 'Rock']
    }

    

}
