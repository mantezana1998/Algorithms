// Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

// Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

function superReducedString(s){
    let output = s.split("");

    for(let i = 0; i < output.length; i++){
        if(output[i] === output[i + 1]){
            output.splice(i, 2);
            i = -1
        }
    }
    return output.length === 0 ? "Empty String" : output.join("");
}
