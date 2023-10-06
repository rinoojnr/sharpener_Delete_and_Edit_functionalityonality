var form = document.getElementById("addForm");
var itemList =document.getElementById("items");

//Form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeLi);

function addItem(e){
    e.preventDefault();
    //get input value
    var text = document.getElementById('item')
  
    //create element
    var li =document.createElement('li');
    li.className='list-group-item';
    //add text node
    li.appendChild(document.createTextNode(text.value))
    
    //create button
    var buttton =document.createElement('button')
    buttton.className="btn btn-danger btn-sm float-right delete";
    buttton.appendChild(document.createTextNode('X'))
    li.appendChild(buttton)
    itemList.appendChild(li)
    
}
function removeLi(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure")){
            var rem = e.target.parentElement;
            itemList.removeChild(rem);
        }
        console.log("hhh")
    }
}