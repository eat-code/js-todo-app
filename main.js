const addButton = document.querySelector('.btn-add');
var inputValue = document.querySelector('.item-input');
const container = document.querySelector('.todo-container');

class item{
    constructor(itemName){
        //create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('form-control');
        input.type = "text"

        let itemBx = document.createElement('div')
        itemBx.classList.add('todo-item');

        let editButton = document.createElement('button')
        editButton.classList.add('btn-edit')

        let removeButton = document.createElement('button')
        removeButton.classList.add('btn-remove')

        container.appendChild(itemBx);
        itemBx.appendChild(input);
        itemBx.appendChild(editButton);
        itemBx.appendChild(removeButton);

    }
}

new item("Sport");