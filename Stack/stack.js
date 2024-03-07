class Stack{
    constructor(){
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()) {
            return null;
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    clear(){
        this.items = []
    }
}




const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); 

console.log("Popped element:", stack.pop()); 

console.log("Is stack empty?", stack.isEmpty()); 

console.log("Stack size:", stack.size()); 

stack.clear();
console.log("Is stack empty after clear?", stack.isEmpty())