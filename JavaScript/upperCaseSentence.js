function upperCaseSentence(string){
    return string.replace(/(?:^|\s)\S/g, function(str){
        return str.toUpperCase();
    })
}

