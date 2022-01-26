function createStack(){
    
    let pilha = [];

    return{
        add: (n, ...elements) => {
            if(n != elements.length){
                console.error("ERRO")
            }
            else{
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
                    console.log(`${pilha.pop()} removido com sucesso`);
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
pilha.remove(2);
pilha.add(4, 1,2,3,4);
pilha.add(10, 1,2,3,4,6,7,8,9,10,11);
console.log(pilha.print())
pilha.remove(10)

/*
1 adicionado com sucesso
2 adicionado com sucesso
3 adicionado com sucesso
4 adicionado com sucesso
4 removido com sucesso
3 removido com sucesso
1 ja está contido na pilha
2 ja está contido na pilha
3 adicionado com sucesso        ----
1 ja está contido na pilha      ----
4 adicionado com sucesso        ----
6 adicionado com sucesso        ----
7 adicionado com sucesso        ----
2 ja está contido na pilha      ----
3 ja está contido na pilha      ----
4 ja está contido na pilha      ----
8 adicionado com sucesso        ----
9 adicionado com sucesso        
10 adicionado com sucesso       
11 adicionado com sucesso      
[
  1, 2, 3,  4,  6,
  7, 8, 9, 10, 11
]
11 removido com sucesso
10 removido com sucesso
9 removido com sucesso
8 removido com sucesso
7 removido com sucesso
6 removido com sucesso
4 removido com sucesso
3 removido com sucesso
2 removido com sucesso
1 removido com sucesso
*/