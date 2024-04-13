
function funct()
{
let form=document.getElementById("formSubmission");
let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
e.preventDefault();
   submit();
})
const submit=()=>{
let bookn = document.getElementById("bn").value;
 let booka = document.getElementById("ba").value;
 let bookp = document.getElementById("bp").value;
 let bookca = document.getElementById("bc").value;
 let bookso = document.getElementById("bs").value;
 let bookcou = document.getElementById("bco").value;
 let edit=document.createElement("button");
   edit.innerHTML="Edit";
   let del=document.createElement("button");
   del.innerHTML="Delete";
   let i=1;
   let ro=document.createElement("tr");
 let newArray = [bookn,booka,bookp,bookca,bookso,bookcou,edit,del];
 newArray.forEach((item)=>{
 if(item==edit||item==del)
 {
   var li = document.createElement("td");
   
   var text=item;
 }
 else{
var li = document.createElement("td");
var text = document.createTextNode(item);
}
li.appendChild(text);
ro.appendChild(li);
table.appendChild(ro);
})
form.reset(); 
}}