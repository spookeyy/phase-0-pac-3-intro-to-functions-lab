function shout(string){
    return string.toUpperCase();
}

// "Hello!".toUpperCase(); // returns 'HELLO!'

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

//3 tests
function sayHiToHeadphonedRoommate(string) {
    //Test 1 if the string passed is all lowercase
    if (string === string.toLowerCase()) { 
        return "I can\'t hear you!"
    }
    //Test 2 if string is all uppercase
    else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }
    // Test 3 if string == "Let's have dinner together!", return value
    else if(string == "Let's have dinner together!"){
        return "I would love to!"
    }
}
