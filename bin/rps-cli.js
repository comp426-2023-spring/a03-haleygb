#!/usr/bin/env node


import minimist from "minimist";

args = minimist(process.argv.slice(2))


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
