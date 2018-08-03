
var account=["0101","0102","0103","0104","0105","0106","0107"];
var user=["hamza","kuldeep","majid","subhan","haseeb","furqan","yousuf"];
var pass=["1228","1229","1230","1231","1232","1233","1234"];
var amount=["103333","58555","67567","54654","90008","43265","56000"];


var flag=false;
var option;
var now=new Date();

var time=now.getHours().toString()+":"+now.getMinutes().toString()+":"+now.getSeconds().toString();

var userName=prompt("Enter Your User").toLowerCase();
var passCode=Number(prompt("Enter Your Pass Code"));




for(var i=0; i<user.length; i++){
    if(userName===user[i].toLowerCase() && passCode===Number(pass[i])){
        alert("Login Successfull");
        flag=true;
        option=prompt("\nWithdraw,Deposit,Transfer and Inquiry\nSelect any one transaction you will perform").toLowerCase();
        if(option==="withdraw"){
            var withdrawAmount=parseInt(prompt("Enter Withdraw Amount"));
            if(withdrawAmount<=parseInt(amount[i])){
                var updateAmount=parseInt(amount[i])-withdrawAmount;
                alert("Withdrawl Rs."+withdrawAmount+" Successfully");
                alert("Transaction Detail\nWithdraw casr Rs."+withdrawAmount+"/=\nDate: "+now.toDateString()+" Time: "+time);
                //alert(transaction[i][0]);
            }
            else if(withdrawAmount>parseInt(amount[i])){
                alert("you don't have enough balance to withdraw this amount, Plz check your Balance");
            }
            else{
                alert("Some thing Wrong Plz Contact your Bank");
            }
        }
        else if(option==="deposit"){
            var chk=false;
            var acc=Number(prompt("Enter Account Number"));
            for(var j=0; j<account.length; j++){
                if(acc===Number(account[j])){
                    chk=true;
                    var deposit=parseInt(prompt("Enter Deposit Amount"));
                    var updateAmount=parseInt(amount[i])+deposit;
                    alert("Deposit Successfully");
                    alert("Transaction Detail\nDeposit cash Rs."+deposit+"/=\nDate: "+now.toDateString()+" Time: "+time);
                    break;
                }
            }
            if(acc!==Number(account[i])){
                alert("Invalid Account Number Plz confirm your account");
            }
                        
        }
        else if(option==="transfer"){
            var chk=false;
            var accountName = prompt("Enter Account Name").toLowerCase();
            var accountNumber = Number(prompt("Enter Account Number"));
            for(var j=0; j<user.length; j++){
                if(accountName===user[j].toLowerCase() && accountNumber===Number(account[j])){
                    chk=true;
                    var transfer=parseInt(prompt("Transfer Amount"));
                    var updateAmount=parseInt(account[j])+transfer;
                    alert("Transfer Successfully");
                    alert("Transaction Detail\n\nTransfer amount of  Rs."+transfer+" to "+accountName+" \nDate: "+now.toDateString()+" Time: "+time);
                    break;
                }
                
            }
            if(chk==false){
                alert("Your entered account in invalid");
            }

        }
        else if(option==="inquiry"){
            alert("Account Dtailed\n\nAccount Name:  "+user[i]+"\nAccount Number:  "+account[i]+"\nCurrent Balance:  "+amount[i]); 
  
        }

        else{
            alert("Some Thing Wrong Plz Contact your Bank");
        }
    }
    
}
if(flag==false){
    alert("Invalid user or passcode");
}
