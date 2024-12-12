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
function