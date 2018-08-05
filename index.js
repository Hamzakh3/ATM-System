
var account=["0101","0102","0103","0104","0105","0106","0107"];
var user=["hamza","kuldeep","majid","subhan","haseeb","furqan","yousuf"];
var pass=["1228","1229","1230","1231","1232","1233","1234"];
var amount=["103333","58555","67567","54654","90008","43265","56000"];


var flag=false;
var option;
var now=new Date();

var time=now.getHours().toString()+":"+now.getMinutes().toString()+":"+now.getSeconds().toString();

var userName;
var passCode;
var i;
var updateAmount;

function login(){
    function clos(){
        menu();    
    }
    function menu(){
        document.getElementById('menu').style.display="block";
        document.getElementById('withdraw').style.display="none";
        document.getElementById('deposit').style.display="none";
        document.getElementById('transfer').style.display="none";
        document.getElementById('inquiry').style.display="none";
    }
    userName =document.getElementById('txtUser').value;    
    passCode= Number(document.getElementById('txtPass').value);
    var flag=false;
    for(i=0; i<user.length; i++){
        if(userName.toLowerCase()===user[i].toLowerCase() && passCode===Number(pass[i])){
            flag=true;
            document.getElementById('login').style.display="none";
            document.getElementById('menu').style.display="block";
            break;
        }
    }
    if(flag==false){
        alert("Invalid USername or Pass Code");
    }
}
function withdraw(){
    document.getElementById('menu').style.display="none";
    document.getElementById('withdraw').style.display="block";
}
function transfer(){
    document.getElementById('menu').style.display="none";
    document.getElementById('transfer').style.display="block";
}    
function deposit(){
    
    document.getElementById('menu').style.display="none";
    document.getElementById('deposit').style.display="block";
    document.getElementById('txtDepositAccName').value=userName;
}
function inquiry(){
    document.getElementById('menu').style.display="none";
    document.getElementById('inquiry').style.display="block";
    balance();
}
function giveMeCash(){
    var withdrawAmount=parseInt(document.getElementById('txtWithdraw').value);
    var flag=false;
    for(var k=0; k<user.length; k++){
        
    if(withdrawAmount<=parseInt(amount[k])){
        flag=true;
        amount[k]=parseInt(amount[k])-withdrawAmount;
        alert("Successfully Withdraw cash Rs."+withdrawAmount+"/=\nDate: "+now.toDateString()+" Time: "+time);
        document.getElementById('txtWithdraw').value="";
        break;
       
    }
    else if(withdrawAmount>parseInt(amount[i])){
       
        alert("You don't have enough balance to withdraw this amount.");                
        document.getElementById('txtWithdraw').value="";
        flag=true;
        break;
    }
    else{
        alert("Some thing Wrong Plz Contact your Bank");
        document.getElementById('txtWithdraw').value = "";
        break;
    }
    }  
    if(flag==false){
        alert("Some thing worng");
    }       
    
}

function cashTransfer(){
    
                     var chk=false;
                     var accountName = document.getElementById('txtTransferAccName').value.toLowerCase();
                     var transferAmount = parseInt(document.getElementById('txtTransferAmount').value);
                     for(var j=0; j<user.length; j++){
                         if(accountName===user[j].toLowerCase()){
                             chk=true;
                             partnerAmount=parseInt(amount[j]+transferAmount);
                             amount[i]=parseInt(amount[i]-transferAmount);
                             alert("\nSuccessfully Transfer amount of  Rs."+transferAmount+" to "+accountName+" \nDate: "+now.toDateString()+" Time: "+time);
                             document.getElementById('txtTransferAccName').value="";
                             document.getElementById('txtTransferAmount').value="";
                             break;
                         }
                        
                     }
                     if(chk==false){
                         alert("Account Name is Invalid");
                     }
        
                
}

function cashDepsoit(){
                    
                    var chk=false; 
                    
                     var accountName = document.getElementById('txtDepositAccName').value.toLowerCase();
                     var depositAmount = parseInt(document.getElementById('txtDepositAmount').value);
                     for(var j=0; j<user.length; j++){
                         if(accountName===user[j].toLowerCase() ){
                             chk=true;
                             amount[j]=parseInt(amount[j])+depositAmount;
                             
                             alert("\nSuccessfully Deposit amount of  Rs."+depositAmount+" to "+accountName+" \nDate: "+now.toDateString()+" Time: "+time);
                             document.getElementById('txtDepositAmount').value="";
                             break;
                         }
                        
                     }
                     if(chk==false){
                         alert("Account Name is Invalid");
                     }
}
function balance(){
    document.getElementById('txtInquiryAccName').value=userName;
    document.getElementById('txtInquiryAccNumber').value=account[i];
    document.getElementById('txtInquiryAccBalance').value=amount[i];

}
function logout(){
    document.getElementById('login').style.display="block";
    document.getElementById('menu').style.display="none";
    document.getElementById('withdraw').style.display="none";
    document.getElementById('deposit').style.display="none";
    document.getElementById('transfer').style.display="none";
    document.getElementById('inquiry').style.display="none";
    document.getElementById('txtUser').value="";
    document.getElementById('txtPass').value="";
    
}

function cancel(a){
    document.getElementById(a).style.display="none";
    document.getElementById('menu').style.display="block";
}




// for(var i=0; i<user.length; i++){
//     if(userName===user[i].toLowerCase() && passCode===Number(pass[i])){
//         alert("Login Successfull");
//         flag=true;
//         option=prompt("\nWithdraw,Deposit,Transfer and Inquiry\nSelect any one transaction you will perform").toLowerCase();
//         if(option==="withdraw"){
//             var withdrawAmount=parseInt(prompt("Enter Withdraw Amount"));
//             if(withdrawAmount<=parseInt(amount[i])){
//                 var updateAmount=parseInt(amount[i])-withdrawAmount;
//                 alert("Withdrawl Rs."+withdrawAmount+" Successfully");
//                 alert("Transaction Detail\nWithdraw casr Rs."+withdrawAmount+"/=\nDate: "+now.toDateString()+" Time: "+time);
//                 //alert(transaction[i][0]);
//             }
//             else if(withdrawAmount>parseInt(amount[i])){
//                 alert("you don't have enough balance to withdraw this amount, Plz check your Balance");
//             }
//             else{
//                 alert("Some thing Wrong Plz Contact your Bank");
//             }
//         }
//         else if(option==="deposit"){
//             var chk=false;
//             var acc=Number(prompt("Enter Account Number"));
//             for(var j=0; j<account.length; j++){
//                 if(acc===Number(account[j])){
//                     chk=true;
//                     var deposit=parseInt(prompt("Enter Deposit Amount"));
//                     var updateAmount=parseInt(amount[i])+deposit;
//                     alert("Deposit Successfully");
//                     alert("Transaction Detail\nDeposit cash Rs."+deposit+"/=\nDate: "+now.toDateString()+" Time: "+time);
//                     break;
//                 }
//             }
//             if(acc!==Number(account[i])){
//                 alert("Invalid Account Number Plz confirm your account");
//             }
                        
//         }
//         else if(option==="transfer"){
//             var chk=false;
//             var accountName = prompt("Enter Account Name").toLowerCase();
//             var accountNumber = Number(prompt("Enter Account Number"));
//             for(var j=0; j<user.length; j++){
//                 if(accountName===user[j].toLowerCase() && accountNumber===Number(account[j])){
//                     chk=true;
//                     var transfer=parseInt(prompt("Transfer Amount"));
//                     var updateAmount=parseInt(account[j])+transfer;
//                     alert("Transfer Successfully");
//                     alert("Transaction Detail\n\nTransfer amount of  Rs."+transfer+" to "+accountName+" \nDate: "+now.toDateString()+" Time: "+time);
//                     break;
//                 }
                
//             }
//             if(chk==false){
//                 alert("Your entered account in invalid");
//             }

//         }
//         else if(option==="inquiry"){
//             alert("Account Dtailed\n\nAccount Name:  "+user[i]+"\nAccount Number:  "+account[i]+"\nCurrent Balance:  "+amount[i]); 
  
//         }

//         else{
//             alert("Some Thing Wrong Plz Contact your Bank");
//         }
//     }
    
// }
// if(flag==false){
//     alert("Invalid user or passcode");
// }
