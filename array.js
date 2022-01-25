let arr1 = [2,6,1,9,4,5,3];

function findLongestConseqSubseq(arr, l){
    debugger
    if(arr.length != l){
        console.error("O tamanho do Array está com erro")
    }
    else{
        let pilha = [];
        let resultado = [];
        let maiorArray = [];

        arr.sort((a,b) => a - b);

        for(let i = 0; i < arr.length; i++){
            pilha = [arr[i]];

            for(let j = i + 1; arr[j] == pilha[pilha.length - 1] + 1; j++){
                pilha.push(arr[j]);
            }

            resultado.push(pilha);
        }

        for(let i = 0; i < resultado.length; i++){
            maiorArray.push(resultado[i].length)
            
            var max = maiorArray.reduce((a,b) => {
                return Math.max(a,b);
            })
        }
        return max
    }
}

console.log(findLongestConseqSubseq(arr1,7))