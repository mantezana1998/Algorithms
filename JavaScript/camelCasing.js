function camelCasing(string){
    return string.replace(/\W+(.)/g, function(match, char){
        return char.toUpperCase();
    })
}

let string = "this will be a string"

// output

// thisWillBeAString