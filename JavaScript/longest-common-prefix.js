// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function longestCommonPrefix(s){
    let size = s.length;

    if(size == 0) return '';

    if(size == 1){
        return s[0];
    }

    s.sort();

    let i = 0;
    let end = Math.min(s[0].length, s[size - 1].length);

    while(i < end && s[0][i] == s[size - 1][i]){
        i++
    }

    let prefix = s[0].substring(0, i);
    return prefix;
}

let sumArray = ["flower","flow","flight"]

longestCommonPrefix(sumArray);

//Output is "fl"