//Generate Prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The Great'
    } else {
        return 'Master'
    }
}
//generate first name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLetter === 'b') {
        return 'Pablo'
    } else {
        return 'Julian'
    }
}

//generate middle name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor} ridge` //EX: blueridge
    } else if (roadType === 'street') {
        return `${favoriteColor}son`   //EX: blueson
    } else {
        return `${favoriteColor}stone`  //EX: bluestone
    }

}

//generate Last Name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase
    if (lastLetter === 'a') {
        return 'Shadow'
    } else if (lastLetter === 'e') {
        return 'Storm'
    } else if (lastLetter === 'g') {
        return 'Lightning'
    }else{
         return 'Thunder'
    }
}

//generate Suffix
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan.`
}


//Master Name Building Function
function genFullName() {
    //Get the Users Inputs from HTML Elements
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
    //Run Name Generating Functions & store them in new variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)
    //Capitialize Name Variables when needed
    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedLastName = capitalize(newLastName);
    //Combine all of the Name variables in a new name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`
    console.log(fullName)
    //Display the new name
    document.getElementById('result').textContent = fullName
}

//Capitliaztion Function
function capitalize(input) {
    console.log(input)
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}





