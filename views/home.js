

function $(id) {return document.getElementById(id)}
counter  = 0 ;
let plantcount = 0;
let plantdata=null;
window.onload = function(){
    $('rightslide').onclick = function(){$('forms').submit();}
    $('plantnameinslideshow').onclick = function(){$('forms').submit();}
    $("more").onclick = clickit;
    fetch();
    setInterval(function(){
        
        
        counter = (counter+1)%plantcount
        document.getElementById("plantnameinslideshow").innerHTML =plantdata[counter].common_name;
        document.getElementById("descrption").innerHTML =plantdata[counter].description;
        document.getElementById("arabic").innerHTML =plantdata[counter].arabicname;
        document.getElementById("french").innerHTML =plantdata[counter].frenchname;
        document.getElementById("orgin").innerHTML =plantdata[counter].country;
        document.getElementById("planttype").innerHTML =plantdata[counter].planttype;
        $('output').value = plantdata[counter].common_name ;
       document.getElementById("imgslide").src = "images/plantsimages/"+plantdata[counter].common_name+".jpg";
    },3000)    
}

function  clickit (){
    if(counter ==0){
        $("aboutus").innerHTML= " The Department of landscape design and ecosystem management has developed this plant database site in line with the department’s ecological orientation thus the database is focusing on native, naturalized, and ecologically suitable plant species for the middle east region.The user will be able to identify plants found the database or search by name. The search by criteria is allowing the users to search the database to find trees, shrubs and vines for specific landscape situations and or local conditions.After following the completion of the project, the department regularly updates of the database and increase the number of inputted information to cover all landscape plants ecologically suitable for the region. " ; 
        counter =1;
        $("more").innerHTML = " less";
    }
    else{
        $("aboutus").innerHTML="the Department of landscape design and ecosystem management has developed this plant database site in line with the department’s ecological orientation thus the database is focusing on native, naturalized, and ecologically suitable plant species for the middle east region"
        $("more").innerHTML = " more";


    counter=0;

    }

}

function fetch() {



    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
        var data = JSON.parse(ajax.responseText);
        plantcount = data.length;
        plantdata = data;


    }
    ajax.open("GET", "saveddatabase.json", true);
    ajax.send();



  }




    
