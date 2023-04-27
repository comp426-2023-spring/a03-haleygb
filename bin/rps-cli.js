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
  node-rps        Return JSON with single player RPSLS result. \
                    e.g. {"player":"rock"} \
  node-rps rock   Return JSON with results for RPSLS played against a simulated opponent. \
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}'

const rules_text = 'Rules for Rock Paper Scissors: \
\n \
- Scissors CUTS Paper \
- Paper COVERS Rock \
- Rock CRUSHES Scissors'



if (args.h || args.help) {
    console.log(help_text)
}

if (args.r || args.rules) {
    console.log(rules_text)
}

export function RPS(playerShot = null){
    const choices = [
        "Rock",
        "Scissor",
        "Spock"
    ]

    const choice_rules = {
        Paper: ['Rock'],
        Rock: ['Scissor'],
        Scissor: ['Paper'],
    }
}
