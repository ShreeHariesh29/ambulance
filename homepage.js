function pwdverify()
{
    uname=document.getElementById("first").value;
    pwd=document.getElementById("second").value;
    if(uname=="admin" && pwd=="123")
    {
        
        window.open("nextpage.html");
    }
    else {
        window.alert("Incorrect email.id and password")
    }
}