class HashTable{
    constructor(size = 50){
        this.buckets = new Array(size)
        this.size = size
    }

    hash(key){
        return key.toString() % this.size;
    }

    setItem(key, value){
        let index = this.hash(key);

        if(!this.buckets[index]){
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value])
        return index
    }

    getItem(key){
        let index = this.hash(key);

        if(!this.buckets[index]){
            return null
        }

        for (let bucket of this.buckets[index]){
            if(bucket[0] === key){
                return bucket[1]
            }
        }
    }
}

const hashTable = new HashTable();
// Insert data to the hash table
hashTable.setItem("bk101","Data structures algorithms");
hashTable.setItem("bk108","Data analytics");
hashTable.setItem("bk200","Cyber security");
hashTable.setItem("bk259","Business Intelligence");
hashTable.setItem("bk330","S/W Development");

// Search data from the hash table 
console.log(hashTable.buckets);

function func(string) {
    //set variable hash as 0
    var hash = 0;
    // if the length of the string is 0, return 0
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++){
        ch = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + ch;
        hash = hash & hash;
    }
    return hash;
}

console.log(func("Max"))