class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    add(element){
        let node = new Node(element);
        let current;

        if(this.head === null){
            this.head = node;
        }
        else{
            current = this.head;

            while(current.next != null){
                current = current.next;
            }

            current.next = node;


        }

        this.size++
    }

    findMiddle(){
        let current = this.head;
        let index;
        let aHalf = this.size / 2
        
        if(aHalf % 2 === 0){
            index = 0;
            while(index++ < aHalf){
                current = current.next;
            }
        }
        else{
            index = 1;
            while(index++ <= aHalf){
                current = current.next;
            }
        }
        

        return current.element
    }
}

const lista = new LinkedList;

lista.add(111);
lista.add(1213);
lista.add(22);
lista.add(121);
lista.add(2);
lista.add(2);



console.log(lista.findMiddle())