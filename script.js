
//compute simple interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); //calculate simple interest 
    //result to display after compute interest button  
    document.getElementById("result").innerHTML = "If you deposited \<mark>"+principal+"\</mark>, \<br> at an interest rate of \<mark>"+rate+"\</mark>%.\<br>You will receive an amount of \<mark>"+interest+"\</mark>,\<br>in the year \<mark>"+year+"\</mark>.\<br>"    
}

//display changed rate after the slidebar 
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
 
//function to validate number 
//if the user enters 0 or negative values, it displays an alert message
function numvalidate(){
    let num  = document.getElementById("principal").value;
    if(isNaN(num) || num < 1 ){
        alert("Enter a positive number"); //alert message
        setTimeout(function() {document.getElementById("principal").focus(); }, 100); //set focus on principal after alert message
    }
}    