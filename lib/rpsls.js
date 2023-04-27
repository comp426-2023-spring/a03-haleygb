#!/usr/bin/env node

import { RPS } from "../bin/rps-cli";
import { RPSLS } from "../bin/rpsls-cli";


export function rpsls(playerShot = null){
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

    
    computer_shot = choices[Math.floor((Math.random()*choices.length))]

}

export function rps(playerShot = null){
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

    
    computer_shot = choices[Math.floor((Math.random()*choices.length))]



}

