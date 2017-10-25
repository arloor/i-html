
function login(name,password){
    var req=new XMLHttpRequest();
    var link="http://localhost:8080/pomeapi/api/user?name="+name+"&password="+password;
    req.open("GET",link,true);
    req.send();
    req.onreadystatechange=function () {
        if(req.readyState==4&&this.status==200){

            if(req.responseText==="true"){//普通用户，非管理员
                setCookie("user",name);
                delCookie("admin")
                window.location.href="http://localhost:63342/i-html/pome_html/index.html";
            }else if(req.responseText==="admin"){//管理员
                setCookie("user",name);
                setCookie("admin","true");
                window.location.href="http://localhost:63342/i-html/pome_html/index.html";
            }else{//登陆失败
                alert("登陆失败请重试！！");
            }

        }
    }
}