const btnNew = document.getElementById('btnNew');
const btnAdd = document.getElementById('btnAdd');
const btnDelete = document.getElementById('btnDelete');
const txtDescription = document.getElementById('txt-description');
const txtDate = document.getElementById('txt-date');


// console.log(btnNew,btnAdd,btnDelete,txtDescription,txtDate);




[btnAdd,btnDelete,txtDescription,txtDate].forEach(ctrl => ctrl.disabled = true); /* all button disabled except add new */


class listItems{
    #description;
    #date;
    #listElm;

    get listElm(){
        return this.#listElm;
    }

    constructor(description,date){
        this.#description = description;
        this.#date = date;
        this.#listElm = document.createElement('label');
        this.#listElm.innerHTML= `<li class="list-group-item"><input class="form-check-input me-1 me-5" type="checkbox" value="" id="firstCheckbox">
        <div class="d-flex flex-column align-items-center">
          <span id="description">${description}</span>
          <span id="date">${date}</span>
        </div>
        <div>
          <i title="Edit itme" class="bi bi-pen"></i>
        </div></li>`;
        
    }
}

const itemList = [];

btnNew.addEventListener('click',()=>{
    [btnAdd,btnDelete,txtDescription,txtDate].forEach(ctrl => ctrl.disabled = false);
    txtDescription.focus();
});

btnAdd.addEventListener('click',()=>{
    const newList = new listItems(txtDescription.value, txtDate.value);
    itemList.push(newList);
    const ulList = document.getElementById('ul-list');
    ulList.append(newList.listElm);  
});

btnDelete.addEventListener('click',()=>{

});

