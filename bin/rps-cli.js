#!/usr/bin/env node

import { rps } from "../lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))


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


if (args.h || args.help) {
    console.log(help_text_RPS)}

if (args.r || args.rules) {

    console.log(rules_text_RPS)
}


try{
    let game_play = rps(args._[0])
    let format_game_play = JSON.stringify(game_play)
    console.log(format_game_play) }
catch {
    console.log(help_text_RPS)
    console.log(rules_text_RPS)}




