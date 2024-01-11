class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkList{
    constructor(){
        this.head=null;
    }

    addAtStart(data){
        const node=new Node(data);

        node.next=this.head;
        this.head=node;
    }

    addAtEnd(data){
        const node =new Node(data);

        if(this.head === null){
            this.head=node;
            return;
        }
        
        let current=this.head;

        while(current.next !== null){
            current=current.next;
        }
        current.next=node;
    }

    getSize(){
        
        if(this.head ==null){
            return 0;
        }
        let current=this.head;
        let count=0;
        while(current){
            count++;
            current=current.next;
        }
        return count;

    }

    addAt(index,data){

        if(index<0 || index>this.getSize()){
            console.log('Invalid Index');
            return;
        }
        if(index ===0){
            this.addAtStart(data);
            return;
        }
        const node =new Node(data);

        let  current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        node.next=current.next;
        current.next=node;

    }

    removeTop(){
        if(this.head ===null){
            return;
        }

        this.head=this.head.next;
    }

    removeLast(){
        if(this.head ==null){
            return;
        }
        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;
    }

    removeAt(index){
        if(index<0 || index>=this.getSize()){
            console.log('Invalid Index');
            return;
        }

        if(index ===0){
            this.removeTop()
            return;
        }
        if(index === this.getSize()-1){
            this,this.removeLast();
            return
        }

        let current=this.head;
        for (let i = 0; i < index-1; i++) {
            current=current.next;
        }
        let node=current.next;
      
        current.next =current.next.next 
        node.next=null;
    }

    printList(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

list=new LinkList()
list.addAtStart(5);
list.addAtStart(6);
list.addAtStart(7);


list.addAtEnd(0);
list.addAt(4,2);
list.printList();

list.removeAt(3)
//list.removeLast()
//list.removeTop()
console.log("After remove")
list.printList()

const arr=[1,3]

