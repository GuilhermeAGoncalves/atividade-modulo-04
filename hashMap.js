
function sortAnagrams(array){

    let map = new Map();

    for(let i = 0; i < array.length; i++){
        let nome = array[i];
        let hash = 0;

        for(let j = 0; j < nome.length; j++){
            hash += nome.charCodeAt(j);
        }

        map.set(nome, hash);
    }

    let clone = new Map([...map.entries()].sort((a,b) => a[1] - b[1]));

    return [...clone.keys()];
    
}

let a = ['deli', 'lemon', 'idle', 'leap', 'pale', 'melon'];

console.log(sortAnagrams(a));