//Generate Prefix
function genPrefix (firstName){
    if(firstName.length > 5){
        return 'The Great'
    } else {
        return 'Master'
    }
}
//generate first name
function genFirstName (firstName){
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a'){
        return 'Jeff'
    } else if (firstLetter === 'b'){
        return 'Pablo'
    } else{
        return 'Julian'
    }
}

//generate middle name
function genMiddleName (roadType, favoriteColor){
    if(roadType === 'road'){
        return `${favoriteColor} ridge` //EX: blueridge
    } else if(roadType === 'street'){
        return `${favoriteColor}son`   //EX: blueson
    } else {
        return `${favoriteColor}stone`  //EX: bluestone
    }

}

//generate Last Name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a'){
        return 'Shadow'
    } else if (lastLetter === 'e') {
        return 'Storm'
    } else if (lastLetter === 'g') {
        return 'Lightning'
    } 
}

//generate Suffix
function genSuffix(favoriteAnimal){
    return `of ${favoriteAnimal} clan.`
}


