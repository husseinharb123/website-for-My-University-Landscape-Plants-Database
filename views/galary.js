function $(id){return document.getElementById(id)}

window.onload =function(){
let selectedoc = document.getElementsByTagName('select')[0];
$("showmore").onchange = showmore; 

let list0fitems = document.getElementsByClassName('item')
for (let index = 0; index < list0fitems.length; index++) {
    list0fitems[index].onclick = clickit;
    
}

}

function showmore(){
let galary = document.getElementsByClassName("image")

for (let index = 0; index < galary.length; index++)  {

    galary[index].style.display='inline-block';
}

for (let index = parseInt(document.getElementById('showmore').value); index < galary.length; index++)  {

    galary[index].style.display='none';
}


}


function clickit(){
let typeofplant = this.innerHTML;
$('inputfortype').value = typeofplant;
document.getElementById('submitform').submit();

}