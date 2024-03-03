class LRUCache{
    constructor(capacity){
    this.maxSize = capacity;
    this.size = 0;
    this.keyMap = new Map(); // Map of key to its position in the cache (index in `cache`)
    this.list=new DoublyLinkList()
    }

    get(key) {
        const node = this.keyMap.get(key);
        if (node){
          this.list.moveToStart(node);
          return node.value;
        } 
        return -1;
       
      };
     
      put(key, value) {
        const node = this.keyMap.get(key);
        if (node) {
          node.value=value;
         
          this.get(key); // Update access order
          return;
        }
      
        if (this.size === this.maxSize) {
          const tailKey=this.list.removeTailNode();
          this.keyMap.delete(tailKey)
          this.size--;
        }
      
        const newNode =new Node(key,value);
        this.keyMap.set(key,newNode);
        this.list.addNodeAtStart(newNode);
        this.size++;
      };  
  }
  
  class Node{
      constructor(key,value){
          this.key=key;
          this.value=value;
          this.next=null;
          this.prev=null;
      }
  }
  
  class DoublyLinkList{
  
      constructor(){
          this.head=null;
          this.tail=null;
      }
  
      addNodeAtStart(node){
          if(this.head ===null){
              this.head=node;
              this.tail=node;
          }else{
              
              node.next=this.head;
              this.head.prev=node;
              this.head=node;
          }
      }
  
      removeNode(node) {
      if (node.prev) {
          node.prev.next = node.next;
      } else {
          this.head = node.next;
      }
  
      if (node.next) {
          node.next.prev = node.prev;
      } else {
          this.tail = node.prev;
      }
      node.next=null;
      node.prev=null;
  }
  
      moveToStart(node){
          this.removeNode(node);
          this.addNodeAtStart(node);
      }
      removeTailNode(){
          if(this.tail === null){
              return null
          }
  
          const key=this.tail.key;
          this.removeNode(this.tail);
  
  
          return key;
      }
  }