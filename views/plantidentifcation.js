function $(id){return document.getElementById(id)};
let counterforindex=1;
window.onload= function(){


$('resetfields').onclick= function(){

    let plant_types = document.querySelectorAll('.plant_cat ') 
            for (let index = 0; index < plant_types.length; index++) {
              plant_types[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           $('pLanttype').value =null;


           let plant_shape = document.querySelectorAll('.plant_shape ') 
           for (let index = 0; index < plant_shape.length; index++) {
            plant_shape[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
              
          }
          $('canopyshape').value =null; 

          let x = document.querySelectorAll('.light_cat ') 
          for (let index = 0; index < x.length; index++) {
           x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
             
         }
         $('light').value =null;  




         let y = document.querySelectorAll('.Soil_cat ') 
         for (let index = 0; index < y.length; index++) {
          y[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
            
        }
        $('soil').value =null;  

        let z = document.querySelectorAll('.water_cat ') 
        for (let index = 0; index < z.length; index++) {
         z[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
           
       }
       $('water').value =null;  

       let g = document.querySelectorAll('.imgborder ') 
       for (let index = 0; index < g.length; index++) {
        g[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
          
      }
      $('country').value =null; 

      let w = document.querySelectorAll('.color_flower ') 
      for (let index = 0; index < w.length; index++) {
       w[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
         
     }
     $('flowerColor').value =null; 

     let s = document.querySelectorAll('.color_fruit') 
     for (let index = 0; index < s.length; index++) {
      s[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
        
    }
    $('fruitcolor').value =null; 

    let b = document.querySelectorAll('.color_cat') 
    for (let index = 0; index < b.length; index++) {
     b[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
       
   }
   $('leafcolorgrowing').value =null; 
   
   let j = document.querySelectorAll('.color_cat2') 
   for (let index = 0; index < j.length; index++) {
    j[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
      
  }
  $('leafcolorchanging').value =null; 






}
    $("back").onclick = back;
    $("next").onclick = next;
    for (let index = 1; index <10 ; index++) {
        if(index == 1) {$($(index).name).style.display="block";}
        else {$($(index).name).style.display="none";}
    }

    let plant_types = document.querySelectorAll('.plant_cat ');
    for (let index = 0; index < plant_types.length; index++) {
        plant_types[index].onclick =clickplanttype;
        
    }


    let plant_shape = document.querySelectorAll('.plant_shape ');
    for (let index = 0; index < plant_shape.length; index++) {
        plant_shape[index].onclick =clickplantshape;
        
    }

    let x = document.querySelectorAll('.light_cat ');
    for (let index = 0; index < x.length; index++) {
        x[index].onclick =clickplantlight;
        
    }

    let y = document.querySelectorAll('.Soil_cat ');
    for (let index = 0; index < x.length; index++) {
        y[index].onclick =clickplantsoil;
        
    }


    let z = document.querySelectorAll('.water_cat ');
    for (let index = 0; index < z.length; index++) {
        z[index].onclick =clickplantwater;
        
    }
    let g = document.querySelectorAll('.imgborder ');
    for (let index = 0; index < g.length; index++) {
        g[index].onclick =  clickplantcountry;
                    
    }
    let w = document.querySelectorAll('.color_flower ');
    for (let index = 0; index < w.length; index++) {
        w[index].onclick =  clickflowercolor;
                    
    }

    let k = document.querySelectorAll('.color_fruit ');
    for (let index = 0; index < k.length; index++) {
        k[index].onclick =  clickfruitcolor;
                    
    }
    let i = document.querySelectorAll('.color_cat ');
    for (let index = 0; index < i.length; index++) {
        i[index].onclick =  clickleafcolorgrowing;
                    
    }
    let o = document.querySelectorAll('.color_cat2 ');
    for (let index = 0; index < o.length; index++) {
        o[index].onclick =  clickleafcolorchanging;
                    
    }




    let listofbuttons = document.querySelectorAll("div nav ul li a");
    for(let i=0; i<listofbuttons.length;i++){
        listofbuttons[i].onclick= clickit;
    }


    

}

function clickit(){
let searchid = this.id;
counterforindex=searchid;
console.log(counterforindex);
for (let index = 1; index <10 ; index++) {
    if(index == this.id) {$($(index).name).style.display="block";}
    else {$($(index).name).style.display="none";}
}

}

function back(){


    if(counterforindex>=2){  
        for (let index = 1; index <10 ; index++) { $($(index).name).style.display="none";}
        for (let index = 1; index <10 ; index++) {
            if(index == counterforindex-1 ) {$($(index).name).style.display="block"; counterforindex = counterforindex-1;}}
        
        
        }console.log(counterforindex);
    }
        
        

    function next(){

        if(counterforindex <=8){  

            counterforindex =  parseInt(counterforindex) +1;          
            for (let index = 1; index <10 ; index++) { $($(index).name).style.display="none";}
            console.log(counterforindex);
            $($(counterforindex).name).style.display="block";



           }

        }

        function clickplanttype(){
            let plant_types = document.querySelectorAll('.plant_cat ') 
            for (let index = 0; index < plant_types.length; index++) {
              plant_types[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let planttypename =  this.getElementsByTagName('p')[0].innerHTML;
           $('pLanttype').value = planttypename;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }



        function clickplantshape(){
            let plant_shape = document.querySelectorAll('.plant_shape ') 
            for (let index = 0; index < plant_shape.length; index++) {
                plant_shape[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let plant_shapename =  this.getElementsByTagName('p')[0].innerHTML;
           $('canopyshape').value = plant_shapename;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }



        
        function clickplantlight(){
            let x = document.querySelectorAll('.light_cat ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('light').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }

        
        
        function clickplantsoil(){
            let x = document.querySelectorAll('.Soil_cat ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('soil').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }
        
        function clickplantwater(){
            let x = document.querySelectorAll('.water_cat ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('water').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }


        function clickplantwater(){
            let x = document.querySelectorAll('.water_cat ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('water').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }


        function clickplantcountry(){
            let x = document.querySelectorAll('.imgborder ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('country').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }


        
        function clickflowercolor(){
            let x = document.querySelectorAll('.color_flower ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('flowerColor').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }

        function clickfruitcolor(){
            let x = document.querySelectorAll('.color_fruit ') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('fruitcolor').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }

        function clickleafcolorgrowing(){
            let x = document.querySelectorAll('.color_cat') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('leafcolorgrowing').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          
        }

        function clickleafcolorchanging(){

            let x = document.querySelectorAll('.color_cat2') 
            for (let index = 0; index < x.length; index++) {
                x[index].getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
               
           }
           let y =  this.getElementsByTagName('p')[0].innerHTML;
           $('leafcolorchanging').value = y;
           this.getElementsByTagName('p')[0].parentNode.style.background ="linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
          



        }


