const createList = (value) => {
    return {
        value:value,
        list:null,
    }
}

const insertList = (node,value) => {

    if(node.value == null){

        if(node.list == null){
            node.value = value;
            return;
        }else{
            node.value = node.list.value;
            node.list = node.list.list;
        }

    }

    if(node.list == null){
        node.list = createList(value);
    }else{
        insertList(node.list,value);
    }
}

const removeList = (node,value) => {
    if(node.value === value){

        if(node.list != null){
            node.value = node.list.value;
            node.list = node.list.list;
        }else{
            node.value = null;
        }

        
    }else{
        removeList(node.list,value);
    }
}

const queryList = (node,value) => {
    if(node.list == null && node.value !== value)return false;
    
    if(node.value === value)return true;

    return queryList(node.list,value);
} 

const printList = (node) => {

    console.log(node.value);

    if(node.list == null){
        return;
    }
    printList(node.list);

}


const list = createList(1);
let usedValues = [];

insertList(list,3);
insertList(list,6);
insertList(list,7);
insertList(list,5);
insertList(list,2);
insertList(list,9);

removeList(list,3);
removeList(list,5);

console.log(queryList(list,7));
console.log(queryList(list,20));
console.log(queryList(list,9));
console.log(queryList(list,2));

printList(list);

