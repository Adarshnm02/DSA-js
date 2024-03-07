class HashTable{
    constructor(size = 11){
        this.size = size;
        this.table = new Array(size)
    }

    hash(key){
        let hashValue = 0
        for (let char of key){
            hashValue += char.charCodeAt(0)
        }
        return hashValue % this.size;
    }

    insertionSort(key, value){
        const index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push({key, value})
    }

    get(key){
        const index = this.hash(key);
        if(this.table[index]) {
            for(let entry of this.table[index]){
                if(entry.key === key){
                    return entry.value
                }
            }
        }
        return undefined
    }
remove(key){
    const index = this.hash(key)

    if(this.table[index]) {
        this.table[index] = this.table[index].filter(entry => entry.key !== key)
    }
}

}