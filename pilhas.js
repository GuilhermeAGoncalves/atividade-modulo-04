//quando for adicionar na pilha, fazer uma verificação, se ja tiver um elemento na pilha, dar erro e não adicionar, caso contrario adicionar

function createStack(){
    
    let pilha = [];

    return{
        add: (n, ...elements) => {
            if(n > elements.length){
                console.error("ERRO")
            }
            else{
                debugger
                for(let i = 0; i < n; i++){
                    if(pilha.indexOf(elements[i]) === -1){
                        pilha.push(elements[i])
                        console.log(`${elements[i]} adicionado com sucesso`)
                    }
                    else{
                        console.error(`${elements[i]} ja está contido na pilha`)
                    }
                }
            }
        },

        remove: (n) => {
            for(let i = 0; i < n; i++){
                if(pilha.length <= 0){
                    console.error("Não existe items para remover");
                    break;
                }
                else{
                    pilha.pop()
                    console.log(`${pilha[i]} removido com sucesso`);
                }
            }
        },

        print: () => {
            return pilha
        }
    }
}


const pilha = new createStack();

pilha.add(4, 1,2,3,4);
pilha.add(6, 1,2,3,4,5,6);
pilha.add(4, 1,2,3,4);

console.log(pilha.print())
pilha.remove(10)

// for(let i = 0; i < n; i++){

//     for(let j = 0; j < pilha.length; j++){
        
//     }
//     pilha.push(elements[i]);
//     console.log("Item Adicionado com sucesso");
// }


