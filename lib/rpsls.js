

//Just an extra comment



export function rpsls(playerShot){
    const choices = [
        "lizard",
        "paper",
        "rock",
        "scissor",
        "spock"
    ]

    const choice_rules = {
        lizard: ['spock', 'paper'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissor'],
        scissor: ['paper', 'lizard'],
        spock: ['scissor', 'rock']
    }

    
    const computer_shot = choices[Math.floor((Math.random()*choices.length))]

    if (playerShot === undefined || playerShot === null){
        return {player: computer_shot}
    }
    else if (playerShot === computer_shot) {
        return {player: playerShot, opponent: computer_shot, result: 'draw'}  
    }
    else if ((choice_rules[computer_shot]).includes(playerShot)) {
        return {player: playerShot, opponent: computer_shot, result: 'lose'}
    }
    else {
        return {player: playerShot, opponent: computer_shot, result: 'win'}
    }

}

export function rps(playerShot){
    const choices = [
        "rock",
        "scissor",
        "spock"
    ]

    const choice_rules = {
        paper: ['rock'],
        rock: ['scissor'],
        scissor: ['paper'],
    }

    
    const computer_shot = choices[Math.floor((Math.random()*choices.length))]

    if (playerShot === undefined || playerShot === null){
        return {player: computer_shot}
    }
    else if (playerShot === computer_shot) {
        return {player: playerShot, opponent: computer_shot, result: 'draw'}  
    }
    else if ((choice_rules[computer_shot]).includes(playerShot)) {
        return {player: playerShot, opponent: computer_shot, result: 'lose'}
    }
    else {
        return {player: playerShot, opponent: computer_shot, result: 'win'}
    }


}

