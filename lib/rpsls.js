#!/usr/bin/env node

import { RPS } from "../bin/rps-cli";
import { RPSLS } from "../bin/rpsls-cli";


export function rpsls(playerShot = null){
    const choices = [
        "lizard",
        "paper",
        "rock",
        "scissor",
        "spock"
    ]

    const choice_rules = {
        Lizard: ['spock', 'paper'],
        Paper: ['rock', 'spock'],
        Rock: ['lizard', 'scissor'],
        Scissor: ['paper', 'lizard'],
        Spock: ['scissor', 'rock']
    }

    
    computer_shot = choices[Math.floor((Math.random()*choices.length))]

}

export function rps(playerShot = null){
    const choices = [
        "rock",
        "scissor",
        "spock"
    ]

    const choice_rules = {
        Paper: ['rock'],
        Rock: ['scissor'],
        Scissor: ['paper'],
    }

    
    computer_shot = choices[Math.floor((Math.random()*choices.length))]



}

