const btnNew = document.getElementById('btnNew');
const btnAdd = document.getElementById('btnAdd');
const btnDelete = document.getElementById('btnDelete');
const txtDescription = document.getElementById('txt-description');
const txtDate = document.getElementById('txt-date');




// console.log(btnNew,btnAdd,btnDelete,txtDescription,txtDate);




[btnAdd,btnDelete,txtDescription,txtDate].forEach(ctrl => ctrl.disabled = true); /* all button disabled except add new */

let items = [];

class listItems{
    #description;
    #date;
    #listElm;
    #checkBox;
    

    get listElm(){
        return this.#listElm;
    }
    
    get checkBox(){
        return this.#checkBox;
    }

    constructor(description,date){
        this.#description = description;
        this.#date = date;
        this.#listElm = document.createElement('li');
        this.#listElm.classList.add('list-group-item');
        this.#listElm.innerHTML= `<input class="checkBox form-check-input me-1 me-5" id="checkBox" type="checkbox">
        <div class="d-flex flex-column align-items-center">
          <span id="description">${description}</span>
          <span id="date">${date}</span>
        </div>
        <div>
          <i title="Edit itme" class="bi bi-pen"></i>
        </div>`;
        items.push(this.#listElm);
        this.#listElm.addEventListener('click',()=>{
            items.forEach(elm =>elm.classList.remove('select'));
            txtDescription.value = this.#description;
            txtDate.value = this.#date;
            btnAdd.innerText = 'UPDATE';
            this.#listElm.classList.add('select');
            
        });        
        this.#checkBox = document.querySelectorAll('.checkBox');
        
        
    }
}

let itemList = []; /* object list */



btnNew.addEventListener('click',()=>{
    
    [btnAdd,btnDelete,txtDescription,txtDate].forEach(ctrl => ctrl.disabled = false);
    txtDescription.focus();
    btnAdd.innerText = 'ADD'
});


const ulList = document.getElementById('ul-list'); /* Code Ul */

btnAdd.addEventListener('click',()=>{
    const newList = new listItems(txtDescription.value, txtDate.value);
    itemList.push(newList);
    ulList.append(newList.listElm);
    

    

    
});

/** Remove from Ul:UlList (list in html)
 *  Remove from added List :itemList(objectlist),items(selection list)
 */

btnDelete.addEventListener('click',()=>{
    let indexVal = null;
    items.forEach(elm => {
        if(elm.classList.contains('select')){
            indexVal = items.indexOf(elm);
            ulList.removeChild(ulList.children[indexVal]);
            let tempObj = [];
            let tempList= [];
            for (let i=0 ; i<itemList.length; i++){
                if(i!=indexVal){
                    tempObj.push(itemList[i]);
                    tempList.push(items[i]);
                }
            }
            itemList = tempObj;
            items = tempList;
        }
    });

    
});


    
