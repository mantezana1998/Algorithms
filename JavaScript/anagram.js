//ex) String 1: "john" && String 2 "ohjn" match 
//ex) String 1: "john" && String 2 "hngo" doesn't match 

function anagram(string1, string2){

    let arrangedString1 = string1.split("").sort().join("");
    let arrangedString2 = string1.split("").sort().join("");

    if(arrangedString1 === arrangedString2){
        return true;
    }
    return false;

}

// Input = "john" "nohj"
// Output = true
