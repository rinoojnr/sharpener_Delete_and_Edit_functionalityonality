var form = document.getElementById("addForm");
var itemList =document.getElementById("items");
var filter =document.getElementById('filter');


//Form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeLi);
filter.addEventListener('keyup',FilterList);

function addItem(e){
    e.preventDefault();
    //get input value
    var text = document.getElementById('item')
    var des =document.getElementById('des')
  
    //create element
    var li =document.createElement('li');
    li.className='list-group-item';
    //add text node
    li.appendChild(document.createTextNode(text.value))
    li.appendChild(document.createTextNode(" "))
    li.appendChild(document.createTextNode(des.value))
    //create button
    var buttton =document.createElement('button')
   
    buttton.className="btn btn-danger btn-sm float-right delete";
    buttton.appendChild(document.createTextNode('X'))
    li.appendChild(buttton)
    var edit =document.createElement('button')
    edit.className="btn btn-warning btn-sm float-right"
    edit.appendChild(document.createTextNode('Edit'))
    li.appendChild(edit)
    itemList.appendChild(li)
}
function removeLi(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure")){
            var rem = e.target.parentElement;
            itemList.removeChild(rem);
        }
    }
}

function FilterList(e){
    var text =e.target.value.toLowerCase()
    var itemList =document.getElementsByTagName('li')
    Array.from(itemList).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(item.childNodes[2].textContent!='Edit'){
            var itemDes =item.childNodes[2].textContent;
        }else{
            var itemDes ="";
        }
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemDes.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
    
}