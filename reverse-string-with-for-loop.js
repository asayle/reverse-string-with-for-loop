// challenge: reverse the provided string using for-loop

function revString(str) {
    // create 'newStr' variable as an empty string
    var newStr= '';  
    // create a reverse for loop starting with last character and ending with first character of string
    
    for ( var i = str.length - 1; i >= 0; i--) {
    //   in the code block, add current letter being looped through to the newStr
        newStr += str[i];
    }
    // return newStr variable
    return newStr;
    }
    
    console.log(revString('car'));
    console.log(revString('bar'));