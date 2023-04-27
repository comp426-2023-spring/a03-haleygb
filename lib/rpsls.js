

//Just an extra comment



export function rpsls(playerShot){
    const choices = [
        "lizard",
        "paper",
        "rock",
        "scissors",
        "spock"
    ]

    const choice_rules = {
        lizard: ['spock', 'paper'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        scissors: ['paper', 'lizard'],
        spock: ['scissors', 'rock']
    }

    
    const computer_shot = choices[Math.floor((Math.random()*choices.length))]


    if (playerShot === undefined || playerShot === null){
        return {player: computer_shot}
    }
    else if(!(choices.includes(playerShot))) {
       console.error()
       throw new Error()
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
    const rps_choices = [
        "rock",
        "scissors",
        "paper"
    ]

    const rps_choice_rules = {
        paper: ['rock'],
        rock: ['scissors'],
        scissor: ['paper'],
    }
    const computer_shot_2 = rps_choices[Math.floor((Math.random()*rps_choices.length))]

    if (playerShot === undefined || playerShot === null){
        return {player: computer_shot_2}
    }
    else if(!(rps_choices.includes(playerShot))) {
        console.error()
        throw new Error()
     }
    else if (playerShot === computer_shot_2) {
        return {player: playerShot, opponent: computer_shot_2, result: 'draw'}  
    }
    else if ((rps_choice_rules[computer_shot_2]).includes(playerShot)) {
        return {player: playerShot, opponent: computer_shot_2, result: 'lose'}
    }
    else {
        return {player: playerShot, opponent: computer_shot_2, result: 'win'}
    }


}

