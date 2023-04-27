#!/usr/bin/env node

import { RPS } from "../bin/rps-cli";
import { RPSLS } from "../bin/rpsls-cli";

args = minimist(process.argv.slice(2))

const help_text_RPSLS = 'Usage: node-rpsls [SHOT] \n\
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

const rules_text_RPSLS = 'Rules for the Lizard-Spock Expansion of Rock Paper Scissors: \
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

const help_text_RPS = 'Usage: node-rpsls [SHOT] \n\
Play Rock Paper Scissors (RPSLS)! \
\n \
  -h, --help        display this help message and exit \
  -r, --rules       display the rules and exit \
\n \
Examples: \
  node-rps        Return JSON with single player RPSLS result. \
                    e.g. {"player":"rock"} \
  node-rps rock   Return JSON with results for RPSLS played against a simulated opponent. \
                    e.g {"player":"rock","opponent":"paper","result":"lose"}'

const rules_text_RPS = 'Rules for Rock Paper Scissors: \
\n \
- Scissors CUTS Paper \
- Paper COVERS Rock \
- Rock CRUSHES Scissors'



