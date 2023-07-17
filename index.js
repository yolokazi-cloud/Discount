function checkEligibility(){
  
    let inputAge = parseInt(document.getElementById("inputAge").value);
    console.log(inputAge);
    let checkboxx = document.getElementById("check").checked;
    console.log(checkboxx);
 
    let txteligible= document.getElementById("txteligible");
   
    if(inputAge >= 65){
        txteligible.innerHTML = "You are eligible for a discount";
    
    } else if(inputAge>=18 && checkboxx==true){
        txteligible.innerHTML = "You are eligible for a discount";
         }
         else{
            txteligible.innerHTML = "You are not eligible for discount";
         }
         

}