function validate()
{
    //getting value from text box

    var name =document.getElementById("name").value ; 
    var email =document.getElementById("email").value ; 
    var msg =document.getElementById("msg").value ; 
  // REgular Expressions
  var nameerror = /^[a-zA-Z ]{3,50}$/ ;
  var emailerror =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
  var msgerror = /^[a-zA-Z\d!@#$%^&*, ]{10,200}$/ ;
  //Conditions
  if(nameerror.test(name))
  {
    document.getElementById("nameerror").innerHTML = "" ;
  }
  else
  {
    document.getElementById("nameerror").innerHTML = "Invalid User name" ;
    return false;
  }
  if(emailerror.test(email))
    {
      document.getElementById("emailerror").innerHTML = "" ;
    }
    else
    {
      document.getElementById("emailerror").innerHTML = "Invalid Email" ;
      return false;
    }
    if(msgerror.test(msg))
      {
        document.getElementById("msgerror").innerHTML = "" ;
      }
      else
      {
        document.getElementById("msgerror").innerHTML = "Your message must consist of atleast 10 words" ;
        return false;
      }
      alert("Your form has been submitted") ;

}


function add(n1,n2)
{
  return n1+n2;
}
function mul(n1,n2)
{
  return n1*n2;
}
function sub(n1,n2)
{
  return n1-n2;
}
function div(n1,n2)
{
  return n1/n2;
}
//Introduction of JSON. Every object consist of Key and a value
var products = [
  {"Id":"1","Name":"Football 1","Category":"Outdoor Sports","Price":"$200","Image":"images/1.jpg"},
  {"Id":"2","Name":"Football 2","Category":"Indoor Sports","Price":"$200","Image":"images/2.jpg"},
  {"Id":"3","Name":"Football 3","Category":"Indoor Sports","Price":"$200","Image":"images/3.jpg"},
  {"Id":"4","Name":"Football 4","Category":"Outoddor Sports","Price":"$200","Image":"images/4.jpg"},
  {"Id":"5","Name":"Football 5","Category":"Indoor Sports","Price":"$200","Image":"images/5.jpg"},
  {"Id":"1","Name":"Football 1","Category":"Outdoor Sports","Price":"$200","Image":"images/1.jpg"},
  {"Id":"2","Name":"Football 2","Category":"Indoor Sports","Price":"$200","Image":"images/2.jpg"},
  {"Id":"3","Name":"Football 3","Category":"Indoor Sports","Price":"$200","Image":"images/3.jpg"},
  {"Id":"4","Name":"Football 4","Category":"Outoddor Sports","Price":"$200","Image":"images/4.jpg"},
  {"Id":"5","Name":"Football 5","Category":"Indoor Sports","Price":"$200","Image":"images/5.jpg"},
  {"Id":"1","Name":"Football 1","Category":"Outdoor Sports","Price":"$200","Image":"images/1.jpg"},
  {"Id":"2","Name":"Football 2","Category":"Indoor Sports","Price":"$200","Image":"images/2.jpg"},
  {"Id":"3","Name":"Football 3","Category":"Indoor Sports","Price":"$200","Image":"images/3.jpg"},
  {"Id":"4","Name":"Football 4","Category":"Outoddor Sports","Price":"$200","Image":"images/4.jpg"},
  {"Id":"5","Name":"Football 5","Category":"Indoor Sports","Price":"$200","Image":"images/5.jpg"},
]


$(document).ready(function(){
$("#header").load("header.html") ;
$("#footer").load("footer.html") ;

});
