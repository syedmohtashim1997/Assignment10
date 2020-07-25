var list=document.getElementById("list")
function todo(){
    var todo=document.getElementById("todo");
    var li=document.createElement("li");
    li.setAttribute("class","lis");
    var tex=document.createTextNode(todo.value);
    li.appendChild(tex);
    //Create Delete Button
    var del=document.createElement("button");
    var deltext=document.createTextNode("DELETE");
    del.setAttribute("class","delete");
    del.setAttribute("onclick","delItems(this)");
    del.appendChild(deltext);
    li.appendChild(del);
    //Edit Button
    var edit=document.createElement("button");
    var edittext=document.createTextNode("Edit");
    edit.setAttribute("class","edit");
    edit.setAttribute("onclick","editItems(this)");
    edit.appendChild(edittext);
    li.appendChild(edit);
    list.appendChild(li);
   todo.value="";
    }
function delItems(e){
e.parentNode.remove();
}

function editItems(e){
   var val=e.parentNode.firstChild.nodeValue;
var editval=prompt("Enter value",val);
e.parentNode.firstChild.nodeValue=editval;
}
function deleteall(){
    list.innerHTML="";
}