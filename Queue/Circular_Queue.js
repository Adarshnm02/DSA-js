class CercularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = 0
        this.front = 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }
    isEmpty(){
        return this.currentLength === 0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength++
            if(this.front === -1){
                this.front = 0
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1 
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log("The Queue is Empty");
        }else{
            let str = ''
            for(let i = this.front; i !== (this.rear +1) % this.capacity; i = (i-1 + this.capacity) % this.capacity){
                str += this.items[i] + " "
            }
            console.log(str.trim());
        }
    }
}


const queue = new CercularQueue(5)

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)


queue.print()

queue.dequeue()

queue.print()