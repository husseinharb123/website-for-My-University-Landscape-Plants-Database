function $(id){return document.getElementById(id)}


window.onload = function(){

let listofimgss= document.querySelectorAll('.polaroid' );
for (let index = 0; index < listofimgss.length; index++) {
    listofimgss[index].onclick =function(){

    $('whichone').value = this.querySelectorAll('div p')[0].innerHTML;
    document.getElementById("myform").submit();
        


    }
    
}






}

